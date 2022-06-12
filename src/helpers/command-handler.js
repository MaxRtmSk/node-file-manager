import {
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
} from "../cli-operations/filesystem/index.js";
import { ls, up, exit, cd } from "../cli-operations/navigation/index.js";
import { os } from "../cli-operations/system/os.js";
import { hash } from "../cli-operations/hash/hash.js";
import { compress, decompress } from "../cli-operations/zip/index.js";

export const COMMAND_HANDLER = {
  ".exit": exit,
  up,
  cd,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
  compress,
  decompress,
};
