import zlib from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const decompress = async (command_content, cli_config) => {
  try {
    const [file, path_to_destination] = command_content;

    const file_to_read = path.join(cli_config.directory, file);
    const decompress_file = path.join(
      cli_config.directory,
      path_to_destination,
      `${file.slice(0, -2)}`
    );

    console.log(decompress_file);

    const readStream = createReadStream(file_to_read);
    const writeStream = createWriteStream(decompress_file);

    const brotli = zlib.createBrotliDecompress();

    await pipeline(readStream, brotli, writeStream);
  } catch (error) {
    console.log(error);
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
