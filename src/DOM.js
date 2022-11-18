const Gameboard = require('./gameboard');

const Grid = (hand) => {
  let grid = null;
  const container = document.getElementById(hand);
  container.style.display = 'grid';
  container.style.gridTemplateRows = 'repeat(10, 1fr)';
  container.style.gridTemplateColumns = 'repeat(10, 1fr)';

  const createGrid = () => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.append(cell);
      cell.setAttribute('datacoor', JSON.stringify(Gameboard().ocean[i]));
      grid = document.querySelectorAll('.cell');
    }
    return { grid };
  };

  const resetGrid = () => {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
  };

  return {
    createGrid,
    resetGrid,
  };
};

module.exports = Grid;
