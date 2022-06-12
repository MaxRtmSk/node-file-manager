import { parseProcessArgv } from "../helpers/parse-process-argv.js";
import { cli_config } from "../config.js";

const process_arguments = parseProcessArgv();

export const TEXT_MESSAGE = {
  WELCOME: () =>
    `Welcome to the File Manager, ${process_arguments.username}!` + "\n",
  EXIT: () =>
    `Thank you for using File Manager, ${process_arguments.username}!`,
  ERROR: () => "Operation failed",
  CLI_INPUT: () => `You are currently in ${cli_config.directory}` + "\n",
};
