import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async (user_input, cli_config) => {
  const gz_file = path.join(__dirname, "files", "fileToCompress.gz");
  const decompress_file = path.join(__dirname, "files", "fileToCompress.txt");

  const unzip = createGunzip();
  const source = createReadStream(gz_file);
  const destination = createWriteStream(decompress_file);

  try {
    await pipeline(source, unzip, destination);
  } catch (error) {
    console.log(error);
  }
};
