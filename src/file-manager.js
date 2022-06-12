import { TEXT_MESSAGES } from "./const/message.js";
import { COMMAND_HANDLER } from "./helpers/command-handler.js";
import { question } from "./custom-readline.js";
import { cli_config } from "./config.js";

export const fileManager = async () => {
  try {
    const user_input = await question(TEXT_MESSAGES.CLI_INPUT());
    const [command, ...command_content] = user_input.split(" ");

    if (command in COMMAND_HANDLER === false) {
      throw new Error(TEXT_MESSAGES.INVALID_INPUT());
    }

    await COMMAND_HANDLER[command](command_content, cli_config);
  } catch (error) {
    console.log(error.message);
  }
  await fileManager();
};
