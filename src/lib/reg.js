/**
 * @msg: 身份证号码校验
 * @param { String } idNumberString 入参修改
 * @return { boolean } 如果输出为True则校验通过，如果为False则校验不通过
 */
export const checkIdNumber = (idNumberString) => {
  let reg = /(^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
  if (!reg.test(idNumberString)) {
    return false;
  }
  let month = '';
  let day = '';
  let year = '';
  if (idNumberString.length === 18) {
    month = idNumberString.substring(10, 12);
    day = idNumberString.substring(12, 14);
    year = idNumberString.substring(6, 10);
  } else if (idNumberString.length === 15) {
    month = idNumberString.substring(8, 10);
    day = idNumberString.substring(10, 12);
    year = idNumberString.substring(6, 8);
  }
  let CMD = checkMonthDay(year, month, day);
  return CMD;
}

function checkMonthDay(year, month, day) { //检测年月日
  year = Number(year);
  if (year < 100) {
    year += 1900;
  }
  month = Number(month);
  day = Number(day);
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: //31天的月
      return day < 32 ? true : false;
    case 4:
    case 6:
    case 9:
    case 11: //30天的月
      return day < 31 ? true : false;
    case 2:
      let flag = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0; //2月分闰年和非闰年
      if (flag) {
        return day < 30 ? true : false;
      } else {
        return day < 29 ? true : false;
      }
  }
}

/**
 *  @msg: form手机号校验
 * 
 */
export function isPhone(rule, value, callback) {
  let reg = /^(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}$/g
  if (!value) {
    return callback(new Error('请输入手机号码'))
  } else if (!reg.test(value)) {
    return callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}

/**
 * @msg: 手机号校验
 * @param { String } phoneString 入参修改
 * @return { boolean } 如果输出为True则校验通过，如果为False则校验不通过
 */

export const phoneReg = (phoneString) => {
  let phoneFlag = false
  let reg = /^(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}$/g
  if (reg.test(phoneString)) {
    phoneFlag = true
  }
  return phoneFlag
}

/**
 * @msg: 密码校验
 * @param { String } passString 入参修改
 * @return { boolean } 如果输出为True则校验通过，如果为False则校验不通过
 */

export const passReg = (passString) => {
  let passFlag = false
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g
  if (reg.test(passString)) {
    passFlag = true
  }
  return passFlag
}
/**
 * @msg: 正整数校验
 * @param { String } integerString
 * @return { boolean } 如果输出为True则校验通过，如果为False则校验不通过
 */

export const singlessIntegerReg = (integerString) => {
  let singlessFlag = false
  let reg = /[1-9]\d*/g
  if (reg.test(integerString)) {
    singlessFlag = true
  }

  return singlessFlag
}

/**
 * @msg: 邮箱验证
 * @param { String } emailString
 * @return { boolean }
 */

export const emailReg = (emailString) => {
  let emailFlag = false
  let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  if (reg.test(emailString)) {
    emailFlag = true
  }

  return emailFlag
}

/**
 * @msg: 中文校验
 * @param { String } chineseString
 * @return { boolean }
 */

export const chineseReg = (chineseString) => {
  let chineseFlag = false
  let reg = /[\u4e00-\u9fa5]+/g
  if (reg.test(chineseString)) {
    chineseFlag = true
  }

  return chineseFlag
}

/**
 * @msg: 年月日校验 YYYY-MM-DD
 * @param { String } dataString
 * @return { boolean }
 */

export const dataReg = (dataString) => {
  let dataFlag = false
  let reg = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/g
  if (reg.test(dataString)) {
    dataFlag = true
  }

  return dataFlag
}

/**
 * @msg: 校验时分秒 HH: mm: ss
 * @param { String } timeString
 * @return { boolean }
 */

export const timeReg = (timeString) => {
  let timeFlag = false
  let reg = /([01]?\d|2[0-3]):[0-5]?\d:[0-5]?\d/g
  if (reg.test(timeString)) {
    timeFlag = true
  }

  return timeFlag
}

/**
 * @msg: 检验年月日时分秒 YYYY-MM-DD HH: mm: ss
 * @param { String } dataTimeString
 * @return { boolean }
 */

export const dataTimeReg = (dataTimeString) => {
  let dataTimeFlag = false
  let reg = /^([1-2]{1}\d{3})\-(([0]{1}[1-9]{1})|([1]{1}[0-2]{1}))\-(([0]{1}[1-9]{1})|([1-2]{1}\d{1})|([3]{1}[0-1]{1}))\s(([0-1]{1}\d{1})|([2]{1}[0-3]))\:([0-5]{1}\d{1})\:([0-5]{1}\d{1})$/g
  if (reg.test(dataTimeString)) {
    dataTimeFlag = true
  }

  return dataTimeFlag
}
