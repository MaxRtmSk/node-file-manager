import { copyFile, readdir, mkdir } from "fs/promises";
import path from "path";

export const cp = async (command_content, cli_config) => {
  try {
    const [path_to_file, path_to_new_directory] = command_content;

    // await mkdir(files_copy);
    // const files = await readdir(files_folder);

    // for (const file of files) {
    //   await copyFile(
    //     path.join(files_folder, file),
    //     path.join(files_copy, file)
    //   );
    // }

    await copyFile(path.join(files_folder, file), path.join(files_copy, file));
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
