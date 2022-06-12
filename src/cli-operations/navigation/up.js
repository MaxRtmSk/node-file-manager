import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const up = async (_, cli_config) => {
  try {
    cli_config.directory = path.dirname(cli_config.directory);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
