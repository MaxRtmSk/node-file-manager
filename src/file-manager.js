import { TEXT_MESSAGES } from "./const/message.js";
import { COMMAND_HANDLER } from "./helpers/command-handler.js";
import { question } from "./custom-readline.js";
import { cli_config } from "./config.js";

export const fileManager = async () => {
  try {
    const user_input = await question(TEXT_MESSAGES.CLI_INPUT());
    const command = user_input.split(" ")[0];
    await COMMAND_HANDLER[command](user_input, cli_config);
  } catch (error) {
    console.log(error);
    console.log(TEXT_MESSAGES.ERROR());
  }
  await fileManager();
};
