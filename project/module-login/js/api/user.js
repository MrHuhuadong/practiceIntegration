//负责和用户相关的远程请求
//具名导出一个登录方法
export async function login(loginId, loginPwd) {
  const reg = await fetch("https://study.duyiedu.com/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ loginId, loginPwd }),
  });
  let result = await reg.json();
    // console.log(result.data);
  return result;
}
