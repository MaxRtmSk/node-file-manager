import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files_folder = path.join(__dirname, "/files");

export const mv = async (user_input, cli_config) => {
  try {
    await writeFile(
      path.join(files_folder, "fresh.txt"),
      "I am fresh and young",
      {
        flag: "wx",
      }
    );
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
