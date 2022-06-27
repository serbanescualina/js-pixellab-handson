(function (x) {
  x.test = 'test';
})(window);

(function () {
  console.log(`Am rulat si am plecat, insa semnul mi-am last.`);
  window.myName = `Alina`;
})();

console.log(myName);
