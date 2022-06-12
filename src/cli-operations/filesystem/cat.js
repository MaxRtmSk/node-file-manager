import { readFile } from "fs/promises";
import path from "path";

export const cat = async (path_to_file, cli_config) => {
  const file_path = path.join(cli_config.directory, path_to_file);

  try {
    const text = await readFile(file_path, "utf8");
    console.log(text);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
