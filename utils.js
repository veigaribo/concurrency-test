const delay = (amount, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb());
    }, amount);
  });
};

module.exports = {
  delay
};
