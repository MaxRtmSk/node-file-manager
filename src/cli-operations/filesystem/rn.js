import { rename as fsrename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rn = async (user_input, cli_config) => {
  const files_folder = path.join(__dirname, "/files");

  try {
    await fsrename(
      path.join(files_folder, "wrongFilename.txt"),
      path.join(files_folder, "wrongFilename.md")
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
