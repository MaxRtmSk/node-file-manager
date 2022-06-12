import zlib from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { TEXT_MESSAGES } from "../../const/message.js";

export const compress = async (command_content, cli_config) => {
  try {
    const [file, path_to_destination] = command_content;

    const files_to_read = path.join(cli_config.directory, file);
    const files_to_save = path.join(
      cli_config.directory,
      path_to_destination,
      `${file}.br`
    );

    const source = createReadStream(files_to_read);
    const destination = createWriteStream(files_to_save);

    const brotli = zlib.createBrotliCompress();

    await pipeline(source, brotli, destination);
  } catch (error) {
    console.log(error);
    throw new Error(TEXT_MESSAGES.COMMON_ERROR());
  }
};
