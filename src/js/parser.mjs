export default function json(bufferData) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      let string = String.fromCharCode.apply(null, new Uint16Array(bufferData));
      try {
        let json = JSON.parse(string);
        resolve(json);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
}
