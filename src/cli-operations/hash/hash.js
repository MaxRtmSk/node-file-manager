import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";

export const hash = async (command_content, cli_config) => {
  try {
    const path_to_file = path.join(cli_config.directory, command_content[0]);

    const text = await readFile(path_to_file, "utf8");

    const result_file_hash = createHash("sha256").update(text).digest("hex");

    console.log(result_file_hash);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
