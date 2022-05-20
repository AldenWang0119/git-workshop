const axios = require('axios');
const fs = require("fs");

const promise = new Promise(function (resolve, reject) {
  let readFile = fs.readFile;

  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      // 錯誤了
      console.log("喔喔喔，發生錯誤了");
      reject(err);
    } else {
      // 因為沒有 err，所以是正確的
      resolve(data);
    }
  });
});


async function doPromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

doPromise();

