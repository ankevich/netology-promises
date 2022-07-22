export default function json(bufferData) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      const string = String.fromCharCode.apply(null, new Uint16Array(bufferData));
      try {
        const jsonStatham = JSON.parse(string);
        resolve(jsonStatham);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
}
