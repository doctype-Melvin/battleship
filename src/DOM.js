const Gameboard = require('./gameboard');

const DOM = (() => {
  const elementFactory = (el, cl, ct) => {
    const element = document.createElement(el);
    element.classList.add(cl);
    if (ct !== null) element.textContent = ct;
    return element;
  };

  // Playboard grids
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const menu = document.getElementById('menu');

  // Create cells with coordinates data
  const createGrid = (side) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.setAttribute('dataCoord', JSON.stringify(Gameboard().ocean[i]));
      side.append(cell);
    }
  };

  // Create cells for both sides
  [left, right].forEach((side) => createGrid(side));

  // Select cells
  const leftGrid = left.childNodes;
  const rightGrid = right.childNodes;

  // Add classes
  leftGrid.forEach((cell) => cell.classList.add('leftCell'));
  rightGrid.forEach((cell) => cell.classList.add('rightCell'));

  // Add event listeners
  leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
    console.log(e.target);
  }));
  rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
    console.log(e.target);
  }));

  // Buttons
  const ships = Gameboard().SHIPS;
  ships.forEach((ship) => menu.append(elementFactory('button', 'sBtn', ship.name.toUpperCase())));
  const buttons = document.querySelectorAll('.sBtn');
  buttons.forEach((btn) => btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  }));

  const rotateBtn = elementFactory('button', 'btn', 'ROTATE');
  menu.append(rotateBtn);
  rotateBtn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
})();
