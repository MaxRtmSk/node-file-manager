import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async (user_input, cli_config) => {
  const files_to_read = path.join(__dirname, "files", "fileToCompress.txt");
  const files_to_save = path.join(__dirname, "files", "fileToCompress.gz");

  const gzip = createGzip();
  const source = createReadStream(files_to_read);
  const destination = createWriteStream(files_to_save);

  try {
    await pipeline(source, gzip, destination);
  } catch (error) {
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
