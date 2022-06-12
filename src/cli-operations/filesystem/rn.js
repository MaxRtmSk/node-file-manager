import { rename as fsrename } from "fs/promises";

export const rn = async (user_input, cli_config) => {
  try {
    console.log("rn", user_input);
    // await fsrename(
    //   path.join(files_folder, "wrongFilename.txt"),
    //   path.join(files_folder, "wrongFilename.md")
    // );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
