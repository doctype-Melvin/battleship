const Gameboard = require('./gameboard');

const DOM = () => {
  // Grid factory
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

  const Menu = () => {
    const container = document.querySelector('.menu');
    const score = document.createElement('div');
    const info = document.createElement('div');
    const harbor = document.createElement('div');
    const rotate = document.createElement('button');
    score.textContent = 'Score';
    info.textContent = 'This game is under construction';
    harbor.textContent = 'Carrier, Battleship, Submarine, Cruiser, Destroyer';
    rotate.textContent = 'Rotate Ship';
    container.append(score, info, harbor, rotate);
  };

  return {
    Grid,
    Menu,
  };
};
module.exports = DOM;
