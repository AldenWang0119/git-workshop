const promise = new Promise(function (resolve, reject) {
  let readFile = fs.readFile;
  const fs = require("fs");

  fs.readFile("test11111.txt", "utf-8", (err, data) => {
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

promise.then(
  function (data) {
    console.log(data);
  },
  function (err) {
    console.log("喔喔喔，發生錯誤了");
    console.error(err);
  }
);
