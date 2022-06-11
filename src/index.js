import * as readline from "readline";
import { constants } from "fs";
import { access } from "fs/promises";
import os from "os";
import { stdin as input, stdout as output } from "node:process";
import path from "path";
import util from "util";
import { list } from "./filesystem/list.js";
import { parseProcessArgv } from "./parseProcessArgv.js";

const rl = readline.createInterface({ input, output });
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const question = util.promisify(rl.question).bind(rl);

const process_arguments = parseProcessArgv();

const cli_config = {
  directory: os.homedir(),
};

const COMMAND_HANDLER = {
  up: async (_, cli_config) => {
    cli_config.directory = path.dirname(cli_config.directory);
  },
  ls: async (_, cli_config) => {
    const result_list = await list(cli_config.directory);
    console.log(result_list);
  },
  ".exit": async () => {
    console.log(TEXT_MESSAGE.EXIT());
    process.exit();
  },
  cd: async (user_input, cli_config) => {
    const new_path = path.join(cli_config.directory, user_input.slice(3));
    await access(new_path, constants.R_OK);
    cli_config.directory = new_path;
  },
};

const TEXT_MESSAGE = {
  WELCOME: () =>
    `Welcome to the File Manager, ${process_arguments.username}!` + "\n",
  EXIT: () =>
    `Thank you for using File Manager, ${process_arguments.username}!`,
  ERROR: () => "Operation failed",
  CLI_INPUT: () => `You are currently in ${cli_config.directory}` + "\n",
};

const main = async () => {
  try {
    const user_input = await question(TEXT_MESSAGE.CLI_INPUT());
    const command = user_input.split(" ")[0];
    await COMMAND_HANDLER[command](user_input, cli_config);
  } catch (error) {
    console.log(TEXT_MESSAGE.ERROR());
  }
  await main();
};

(async () => {
  console.log(TEXT_MESSAGE.WELCOME());

  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(TEXT_MESSAGE.EXIT());
      process.exit();
    }
  });

  await main();
})();
