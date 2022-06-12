import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const cat = async (user_input, cli_config) => {
  const files_folder = path.join(__dirname, "files");

  try {
    const text = await readFile(
      path.join(files_folder, "/fileToRead.txt"),
      "utf8"
    );
    console.log(text);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
