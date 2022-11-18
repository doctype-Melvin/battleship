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
    score.classList.add('score');
    const info = document.createElement('div');
    info.classList.add('info');
    const harbor = document.createElement('div');
    harbor.classList.add('harbor');
    const makeShipBtn = (name) => {
      const btn = document.createElement('button');
      btn.classList.add('ship');
      btn.textContent = `${name}`.toUpperCase();
      return btn;
    };
    Gameboard().SHIPS.forEach((ship) => harbor.append(makeShipBtn(ship.name)));
    const rotate = document.createElement('button');
    rotate.classList.add('rotate');
    score.textContent = 'Score';
    info.textContent = 'This game is under construction';
    rotate.textContent = 'Rotate Ship';
    container.append(score, info, harbor, rotate);
  };

  return {
    Grid,
    Menu,
  };
};
module.exports = DOM;
