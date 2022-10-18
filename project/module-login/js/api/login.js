import m from "./doms.js";
import { login } from "./user.js";
//导出一个函数，调用该函数，会自动获取文本框得值完成登录
let isLoging = false;
export async function logined() {
  if (isLoging) {
    return;
  }
  isLoging = true;
  const loginId = m.userName.value;
  const loginPwd = m.userPassword.value;
  console.log(loginId, loginPwd);
  if (!loginId || !loginPwd) {
    alert("请输入用户名或密码");
    return;
  }
  m.btnSubmit.value = "登录中...";
  const msg = await login(loginId, loginPwd);
  if (msg.code === 0) {
    alert(`登陆成功,欢迎你 ${msg.data.nickname}`);
    console.log(`登陆成功,欢迎你 ${msg.data.nickname}`);
  } else {
    alert(msg.msg + ",请再次尝试");
    console.log(msg.msg + ",请再次尝试");
  }
  isLoging = false;
  m.btnSubmit.value = "登录";
}
