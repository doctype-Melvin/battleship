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
  gameboard().harbor.forEach((ship) => menu.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase())));
  menu.append(elementMaker('button', 'rotate', 'ROTATE'));
  menu.append(elementMaker('button', 'reset', 'RESET'));

  // Menu section end

  // EventListeners section start
  let shipChoice = null;
  const setShipName = (value) => {
    shipChoice = value;
    return shipChoice;
  };
  const getShipName = () => shipChoice;
  const activateShip = (player) => {
    playerGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      const coor = JSON.parse(e.target.attributes[1].value);
      const ship = getShipName();
      player.setShip(ship, coor);
    }));
  };

  const shipBtns = document.querySelectorAll('.shipBtn');
  shipBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    const shipName = e.target.textContent.toLowerCase();
    setShipName(shipName);
  }));
  // EventListeners section end

  return {
    shipGrid,
    playerGrid,
    attacksGrid,
    robotoGrid,
    activateShip,
  };
};

module.exports = input;
