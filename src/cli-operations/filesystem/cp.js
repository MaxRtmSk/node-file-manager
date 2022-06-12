import { copyFile } from "fs/promises";
import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const cp = async (command_content, cli_config) => {
  try {
    const [file_name, path_to_new_directory] = command_content;

    await copyFile(
      path.join(cli_config.directory, file_name),
      path.join(cli_config.directory, path_to_new_directory, file_name)
    );
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
