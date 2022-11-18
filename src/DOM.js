const Gameboard = require('./gameboard');

const DOM = () => {
  // Grid factory
  const Grid = (...grids) => {
    let grid = null;
    const createGrid = (board) => {
      for (let i = 0; i < 100; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.append(cell);
        cell.setAttribute('datacoor', JSON.stringify(Gameboard().ocean[i]));
        grid = document.querySelectorAll('.cell');
      }
      console.log(grid);
      grid.forEach((cell) => cell.addEventListener('click', (e) => {
        console.log(e.target);
      }));
      return { grid };
    };

    grids.forEach((side) => {
      const container = document.getElementById(side);
      container.style.display = 'grid';
      container.style.gridTemplateRows = 'repeat(10, 1fr)';
      container.style.gridTemplateColumns = 'repeat(10, 1fr)';
      createGrid(container);
    });

    const resetGrid = () => {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    };

    return {
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
