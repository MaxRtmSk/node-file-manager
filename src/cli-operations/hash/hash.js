import { createHash } from "crypto";
import { readFile } from "fs/promises";

export const hash = async (user_input, cli_config) => {
  try {
    // const text = await readFile(
    //   path.join(files_folder, "/fileToCalculateHashFor.txt"),
    //   "utf8"
    // );
    console.log(user_input);

    const sha256Hasher = createHash("sha256");

    // const hash = sha256Hasher.update(text).digest("hex");
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};
