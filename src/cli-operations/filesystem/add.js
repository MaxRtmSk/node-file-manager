import { writeFile } from "fs/promises";
import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const add = async (user_input, cli_config) => {
  try {
    await writeFile(path.join(cli_config.directory, user_input), "", {
      flag: "wx",
    });
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
