const elementMaker = (nam, clas, content, id) => {
  const element = document.createElement(nam);
  element.classList.add(clas);
  if (id === null || content === null) return element;
  if (content !== null) element.textContent = content;
  if (id !== null) element.setAttribute('id', id);
  return element;
};

module.exports = elementMaker;
