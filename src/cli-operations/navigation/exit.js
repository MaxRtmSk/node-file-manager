import { TEXT_MESSAGE } from "../../const/message.js";

export const exit = async () => {
  try {
    console.log(TEXT_MESSAGE.EXIT());
    process.exit();
  } catch (error) {
    throw e;
  }
};
