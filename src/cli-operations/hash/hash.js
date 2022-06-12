import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const hash = async (user_input, cli_config) => {
  try {
    const text = await readFile(
      path.join(files_folder, "/fileToCalculateHashFor.txt"),
      "utf8"
    );

    const sha256Hasher = createHash("sha256");

    const hash = sha256Hasher.update(text).digest("hex");

    console.log(hash);
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

hash();
