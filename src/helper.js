const elementMaker = (nam, clas, content) => {
  const element = document.createElement(nam);
  element.classList.add(clas);
  if (content !== null) element.textContent = content;
  return element;
};

module.exports = elementMaker;
