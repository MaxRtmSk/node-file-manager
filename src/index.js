import { catchCLIExit } from "./custom-events/catch-cli-exit.js";
import { TEXT_MESSAGE } from "./const/message.js";
import { fileManager } from "./file-manager.js";

(async () => {
  console.log(TEXT_MESSAGE.WELCOME());
  // catchCliExitEvent();
  await fileManager();
})();
