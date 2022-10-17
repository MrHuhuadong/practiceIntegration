/**
 * 运行该函数，会逐字打印config.js中的文本
 * 每个字之间的间隔在config.js已有配置
 */
const config = require("./config");
const print = require("./print");
const delay = require("./delay");
async function run() {
  let index = 0;
  while (index < print.text.length) {
    print.print(index);
    await delay.delay(config.wordDuration);
    index++;
  }
}

run();
