import { TEXT_MESSAGES } from "../../const/message.js";

export const exit = async () => {
  try {
    console.log(TEXT_MESSAGES.EXIT());
    process.exit();
  } catch (error) {
    throw e;
  }
};
