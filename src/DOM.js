const Gameboard = require('./gameboard');

const DOM = (() => {
  // Creates DOM elements and assigns a class to them
  const elementFactory = (type, cl) => {
    const element = document.createElement(type);
    element.classList.add(cl);
    return element;
  };
})();
module.exports = DOM;
