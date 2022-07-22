import json from "./parser.mjs";
import read from "./reader.mjs";

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


GameSavingLoader.load().then(
  (savedGameJson) => {
    // savedGameJson это объект класса GameSaving:
    // {
    //     "id": <number>, // id сохранения
    //     "created": <timestamp>, // timestamp создания
    //     "userInfo": {
    //       "id": <number>, // user id
    //       "name": <string>, // user name
    //       "level": <number>, // user level
    //       "points": <number> // user points
    //     }
    //   }
    console.log("success: ", savedGameJson);
  },
  (error) => {
    console.log(error);
    // ...
  }
);
