import { rename } from "fs/promises";
import path from "path";

export const rn = async (command_content, cli_config) => {
  try {
    const [path_to_file, new_filename] = command_content;

    await rename(
      path.join(cli_config.directory, path_to_file),
      path.join(cli_config.directory, new_filename)
    );
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
