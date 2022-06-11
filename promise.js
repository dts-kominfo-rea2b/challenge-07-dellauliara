const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "") {
      reject("Image not found!3");
    } else if (emosi == "marah") {
      (async () => {
        const a = await promiseTheaterIXX();
        const b = await promiseTheaterVGC();
        let counterIXX = 0;
        let counterVGC = 0;
        for (let i = 0; i < a.length; i++) {
          if (a[i].hasil == "marah") {
            counterIXX++;
          }
        }
        for (let i = 0; i < b.length; i++) {
          if (b[i].hasil == "marah") {
            counterVGC++;
          }
        }
        resolve(counterIXX + counterVGC)
      })();
     } else if (emosi == "tidak marah") {
      (async () => {
        const a = await promiseTheaterIXX();
        const b = await promiseTheaterVGC();
        let counterIXX = 0;
        let counterVGC = 0;
        for (let i = 0; i < a.length; i++) {
          if (a[i].hasil == "tidak marah") {
            counterIXX++;
          }
        }
        for (let i = 0; i < b.length; i++) {
          if (b[i].hasil == "tidak marah") {
            counterVGC++;
          }
        }
        resolve(counterIXX + counterVGC)
      })();
    }
  });
};

module.exports = {
  promiseOutput,
};
