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

const parsDirectory = (directory) => {
  const strin = directory + " " + "\n";
  return `You are currently in ${strin}`;
};

const cli_config = {
  directory: os.homedir(),
};

const COMMAND_HANDLER = {
  up: async (user_input, col) => {
    col.directory = path.dirname(col.directory);
  },
};

// const main = async (user_input) => {
//   let command = user_input && user_input.split(" ")[0];
//   console.log("DEBAGING!!!!!!", user_input);

//   try {
//     // if (command === COMMAND_LIST.UP) {
//     //   // new_directory = path.dirname(directory);
//     // }

//     // if (command === COMMAND_LIST.LS) {
//     //   const result_list = await list(new_directory);
//     //   console.log(result_list);
//     // }

//     // if (command === COMMAND_LIST.EXIT) {
//     //   console.log(`Thank you for using File Manager, ${process_arguments}!`);
//     //   rl.close();
//     //   return;
//     // }

//     // if (command === COMMAND_LIST.CD) {
//     //   const new_path = command.slice(3);
//     //   new_directory = path.join(directory, new_path);
//     //   await access(new_directory, constants.R_OK);
//     // }

//     await COMMAND_HANDLER[command](user_input, cli_config);
//   } catch (error) {}

//   const result = await question(parsDirectory(cli_config.directory));
//   await main(result);
// };

const main = async () => {
  try {
    const user_input = await question(parsDirectory(cli_config.directory));
    let command = user_input && user_input.split(" ")[0];
    await COMMAND_HANDLER[command](user_input, cli_config);
  } catch (error) {
    console.log("Operation failed");
  }
  await main2();
};

(async () => {
  console.log(
    `Welcome to the File Manager, ${process_arguments.username}!` + "\n"
  );

  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(
        `Thank you for using File Manager, ${process_arguments.username}!`
      );
      process.exit();
    }
  });

  await main();
})();
