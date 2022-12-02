const gameboard = require('./gameboard');
const elementMaker = require('./helper');

const DOM = () => {
  const shipsGrid = document.getElementById('ships');
  const attackGrid = document.getElementById('attacks');
  const menuBox = document.getElementById('menu');

  gameboard().harbor.forEach((ship) => menuBox.append(elementMaker('button', 'shipBtn', ship.name, ship.name)));

  const makeGrid = (id, side) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add(id);
      cell.setAttribute('datacoord', JSON.stringify(gameboard().ocean[i]));
      side.append(cell);
    }
    return side;
  };

  makeGrid('ships', shipsGrid);
  makeGrid('attacks', attackGrid);

  const playerOcean = document.querySelectorAll('.ships');
  const cpuOcean = document.querySelectorAll('.attacks');

  const clickShips = (e) => {
    console.log(e.target.attributes[1].value);
  };
  // playerOcean.forEach((cell) => cell.addEventListener('click', (e) => clickShips(e)));

  const clickAttack = (e) => {
    console.log(e.target.attributes[1].value);
  };
  // cpuOcean.forEach((cell) => cell.addEventListener('click', (e) => clickAttack(e)));
  return {
    playerOcean,
    cpuOcean,
  };
};

module.exports = DOM;
