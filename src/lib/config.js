const config = {
  BASE_URL: process.env.VUE_APP_API_URL,
  ERR_OK: 'S000000',                        // 操作成功
  ERR_AUTH_EXPIRED: 'E000008',              // 身份过期，请重新登录
  ERR_NOT_LOGIN: 'E000021',                 // 用户未登录
  ERR_FAIL_LOGIN: 'E000022',                // 网络异常，请重新登录
  ERR_SIGN_ELSE: 'E000023',                 // 您的账号已在其他地方登录，请注意账号安全
  ERR_SIGN_OTHER_ELSE: 'E000050',           // 您的账号已在其他地方登录，请注意账号安全
  ERR_NO_VCODE: 'ESSO110',                  // 验证码为空
  ERR_FAIL_PASS: 'ESSO003'                  // 密码错误
}

export default config