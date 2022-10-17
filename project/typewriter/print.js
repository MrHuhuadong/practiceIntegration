// function printPoetry(obj) {
//     let text = obj.text.split("").filter((item) => item !== " "&& item !== "\n");
//   //   console.log(text);
//     let i = 0;
//     const timer = setInterval(() => {
//       console.log(text[i]);
//       i++;
//       if (i >= text.length) {
//         clearInterval(timer);
//       }
//     }, obj.wordDuration);
//   }
//   printPoetry(obj);
/**
 * 该函数会做以下两件事：
 * 1. console.clear() 清空控制台
 * 2. 读取config.js中的text配置，打印开始位置到index位置的字符
 * @param {number} index
 */
const config = require("./config");
let text = config.text.split("").filter((item) => item !== " ");
function print(index) {
  //   let text = config.text.split("").filter((item) => item !== " ");
  let str = "";
  console.clear();
  for (let i = 0; i <= index; i++) {
    str += text[i];
  }
  console.log(str);
}
print(1);
module.exports = {
  print,
  text,
};
