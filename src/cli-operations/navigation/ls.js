import { readdir } from "fs/promises";
import { TEXT_MESSAGES } from "../../const/message.js";

export const ls = async (_, cli_config) => {
  try {
    const files = await readdir(cli_config.directory);
    console.log(files);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
