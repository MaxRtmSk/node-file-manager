import { writeFile } from "fs/promises";
import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const add = async (command_content, cli_config) => {
  try {
    const new_file_name = command_content[0];
    await writeFile(path.join(cli_config.directory, new_file_name), "", {
      flag: "wx",
    });
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
