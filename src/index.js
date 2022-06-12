import { catchCLIExit } from "./custom-events/catch-cli-exit.js";
import { TEXT_MESSAGES } from "./const/message.js";
import { fileManager } from "./file-manager.js";

(async () => {
  console.log(TEXT_MESSAGES.WELCOME());
  catchCLIExit();
  await fileManager();
})();
