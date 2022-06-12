import { unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rm = async (user_input, cli_config) => {
  const files_folder = path.join(__dirname, "/files");

  try {
    await unlink(path.join(files_folder, "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
