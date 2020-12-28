module.exports = (num) => {
  const str = `${num}`;

  // 利用正则的子项来替换
  return str.replace(/(\d{1,3})(?=(\d{3})+$)/g, function ($1) {
    return $1 = $1 + ',';
  });
};
