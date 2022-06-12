import * as readline from "readline";
import { stdin as input, stdout as output } from "node:process";
import util from "util";

const rl = readline.createInterface({ input, output });
readline.emitKeypressEvents(process.stdin);
export const question = util.promisify(rl.question).bind(rl);
