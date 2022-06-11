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
  const strin = directory + ": " + "\n";
  return `You are currently in ${strin}`;
};

const main = async (answer, directory) => {
  let new_directory = directory || os.homedir();
  try {
    console.log("answer:", answer);
    if (answer === "up") {
      new_directory = path.dirname(directory);
    }
    if (answer === "ls") {
      const result_list = await list(new_directory);
      console.log(result_list);
    }
    if (answer && answer.startsWith("cd")) {
      const new_path = answer.slice(3);
      new_directory = path.join(directory, new_path);
      await access(new_directory, constants.R_OK);
    }
    if (answer === ".exit") {
      console.log(`Thank you for using File Manager, ${process_arguments}!`);
      rl.close();
      return;
    }
  } catch (error) {
    console.log("Operation failed");
  }

  const result = await question(parsDirectory(new_directory));
  await main(result, new_directory);
};

(async () => {
  console.log(`Welcome to the File Manager, ${process_arguments.username}!`);

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
