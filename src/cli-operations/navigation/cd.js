import path from "path";
import { constants } from "fs";
import { access } from "fs/promises";

export const cd = async (user_input, cli_config) => {
  try {
    const new_path = path.join(cli_config.directory, user_input.slice(3));
    await access(new_path, constants.R_OK);
    cli_config.directory = new_path;
  } catch (error) {
    throw e;
  }
};
