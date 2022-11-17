const Gameboard = require('./gameboard');

const createGrid = (hand) => {
  let grid = null;
  const container = document.getElementById(hand);
  container.style.display = 'grid';
  container.style.gridTemplateRows = 'repeat(10, 1fr)';
  container.style.gridTemplateColumns = 'repeat(10, 1fr)';
  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.append(cell);
    cell.setAttribute('datacoor', JSON.stringify(Gameboard().ocean[i]));
    grid = document.querySelectorAll('.cell');
    console.log(Gameboard().ocean[i]);
  }
  return { grid };
};

module.exports = createGrid;
