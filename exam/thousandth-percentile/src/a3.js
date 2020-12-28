module.exports = (num) => {
  const str = `${num}`;

  // 先将字符串转成数组，利用reverse反转数组后每3个数字后添加一个分隔符“,”，到字符串末尾除外，之后转回字符串。
  // 利用字符串和数组方法
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})+?/g, function (s) {
      return s + ',';
    })
    .replace(/,$/, '')
    .split('')
    .reverse()
    .join('');
};
