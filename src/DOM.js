const Game = require('./game');
const Gameboard = require('./gameboard');

(() => {
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
  //   leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
  //     console.log(e.target);
  //   }));
  // Right side EL should only activate after all ships have been placed
  // Placing all ships triggers the cpu random placement method
  // This starts the second phase of the game
  // Player now makes the first move
  rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
    console.log(e.target);
  }));

  // Buttons
  const ships = Gameboard().SHIPS;
  ships.forEach((ship) => menu.append(elementFactory('button', 'sBtn', ship.name.toUpperCase())));
  const buttons = document.querySelectorAll('.sBtn');
  buttons.forEach((btn) => btn.addEventListener('click', (e) => {
    const ship = (e.target.textContent.toLowerCase());
    leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      const coor = JSON.parse(e.target.attributes[0].nodeValue);
      console.log(ship, coor);
      Game().human.setShip(ship, coor);
      console.log(Game().human.board.occupied);
    }));
  }));

  const rotateBtn = elementFactory('button', 'btn', 'ROTATE');
  menu.append(rotateBtn);
  rotateBtn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
})();
