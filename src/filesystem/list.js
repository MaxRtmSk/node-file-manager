import { readdir } from "fs/promises";

export const list = async (directory) => {
  try {
    const files = await readdir(directory);
    return files;
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
