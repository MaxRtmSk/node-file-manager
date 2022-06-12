import { readdir } from "fs/promises";

export const ls = async (_, cli_config) => {
  try {
    const files = await readdir(cli_config.directory);
    console.log(files);
  } catch (error) {
    throw e;
  }
};
