const gameboard = require('./gameboard');
const player = require('./player');

const input = () => {
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

  return {
    shipGrid,
    playerGrid,
    attacksGrid,
    robotoGrid,
  };
};

module.exports = input;
