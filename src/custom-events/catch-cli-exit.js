export { TEXT_MESSAGE } from "../const/message.js";
process.stdin.setRawMode(true);

export const catchCLIExit = () => {
  process.stdin.on("keypress", (_, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(TEXT_MESSAGE.EXIT());
      process.exit();
    }
  });
};
