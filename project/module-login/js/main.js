import { login } from "./api/user.js";
import f from "./api/doms.js";
import { logined } from "./api/login.js";
//js 入口模块
// logined();
f.btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  logined();
});
