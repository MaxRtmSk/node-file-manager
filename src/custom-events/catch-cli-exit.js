import { TEXT_MESSAGES } from "../const/message.js";
import * as readline from "readline";

process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);

export const catchCLIExit = () => {
  process.stdin.on("keypress", (_, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(TEXT_MESSAGES.EXIT());
      process.exit();
    }
  });
};
