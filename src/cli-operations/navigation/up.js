import path from "path";

export const up = async (_, cli_config) => {
  try {
    cli_config.directory = path.dirname(cli_config.directory);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
