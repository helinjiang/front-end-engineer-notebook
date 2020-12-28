module.exports = (num) => {
  const str = `${num}`;

  // 零宽断言
  return str.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
    return s + ',';
  });
};
