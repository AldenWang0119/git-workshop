// read stock no from stock.txt

// npm i axios
const axios = require("axios");
const fs = require("fs/promises");



async function main() {
  try {
    let number = await fs.readFile("./stock.txt", "utf-8");
    const response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: "json",
          date: "20220301",
          stockNo: number,
        },
      }
    );
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
}

main();
