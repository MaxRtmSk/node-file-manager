import { unlink } from "fs/promises";
import path from "path";

export const rm = async (command_content, cli_config) => {
  try {
    const path_to_file = path.join(cli_config.directory, command_content[0]);

    await unlink(path_to_file);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
