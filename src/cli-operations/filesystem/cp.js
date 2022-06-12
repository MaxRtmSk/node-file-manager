import { copyFile, readdir, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const cp = async (user_input, cli_config) => {
  const files_folder = path.join(__dirname, "/files");
  const files_copy = path.join(__dirname, "/files_copy");

  try {
    await mkdir(files_copy);
    const files = await readdir(files_folder);

    for (const file of files) {
      await copyFile(
        path.join(files_folder, file),
        path.join(files_copy, file)
      );
    }
  } catch (err) {
    throw Error("FS operation failed");
  }
};
