import { EOL, arch, userInfo, homedir, cpus } from "os";
import { TEXT_MESSAGES } from "../../const/message.js";

export const os = async (command_content, cli_config) => {
  try {
    const flag = command_content[0];

    switch (flag) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;
      case "--cpus":
        const cp = cpus().map(({ model, speed }) => ({
          model,
          speed: speed * 0.001,
        }));
        console.table(cp);
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        throw new Error();
    }
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
