import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const bufferPromise = read();
      bufferPromise
        .then((buffer) => json(buffer))
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
