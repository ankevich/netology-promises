import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      let bufferPromise = read();
      bufferPromise
        .then((buffer) => {
          return json(buffer);
        })
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}


