export function isObjectEmpty(obj = {}) {
  return Object.keys(obj).length > 0
    ? false
    : true
}

export function handleInput(key, value, setState) {
  setState(prevState => ({
    ...prevState,
    [key]: value
  }))
}

export function createdAt() {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  return year + '-' + (month <= 9 ? '0' + month : month) + '-' + (day <= 9 ? '0' + day : day) + ' ' + hour + ':' + min + ':' + sec;
}
