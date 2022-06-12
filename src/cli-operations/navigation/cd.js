import path from "path";
import { constants } from "fs";
import { access } from "fs/promises";
import { TEXT_MESSAGES } from "../../const/message.js";

export const cd = async (command_content, cli_config) => {
  try {
    const new_path = path.join(cli_config.directory, command_content[0]);
    await access(new_path, constants.R_OK);
    cli_config.directory = new_path;
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
