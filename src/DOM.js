const gameboard = require('./gameboard');
const player = require('./player');
const elementMaker = require('./helper');

const input = () => {
  // Grid section start
  const leftGrid = document.getElementById('ships');
  const rightGrid = document.getElementById('attacks');
  const gridFactory = (spec, container) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add(spec);
      cell.setAttribute('datacoord', JSON.stringify(gameboard().ocean[i]));
      container.append(cell);
    }
    return container;
  };

  const attacksGrid = gridFactory('attacks', rightGrid);
  const robotoGrid = document.querySelectorAll('.attacks');
  const shipGrid = gridFactory('ships', leftGrid);
  const playerGrid = document.querySelectorAll('.ships');

  // Grid section end

  // Menu section start
  const menu = document.querySelector('.menu');
  menu.append(elementMaker('div', 'score', 'The scoreboard'));
  menu.append(elementMaker('div', 'info', 'The message info'));
  gameboard().harbor.forEach((ship) => menu.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
  menu.append(elementMaker('button', 'rotate', 'ROTATE'));
  menu.append(elementMaker('button', 'reset', 'RESET'));

  // Menu section end

  // EventListeners section start
  let shipChoice = null;
  let coor = null;
  let ship = null;
  const setShipName = (value) => {
    shipChoice = value;
    return shipChoice;
  };
  const getShipName = () => shipChoice;

  const placeChoice = (ply) => {
    let button;
    const allBtns = document.querySelectorAll('.shipBtn');
    allBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      button = e.target;
      setShipName(e.target.id);
    }));
    const allCells = document.querySelectorAll('.ships');
    allCells.forEach((cell) => cell.addEventListener('click', (e) => {
      ship = getShipName();
      coor = JSON.parse(e.target.attributes[1].value);
      button.disabled = true;
      ply.setShip(ship, coor);
      console.log(ply.board.inGame);
    }));
  };
  // EventListeners section end

  return {
    shipGrid,
    playerGrid,
    attacksGrid,
    robotoGrid,
    placeChoice,
  };
};

module.exports = input;
