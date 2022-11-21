const Gameboard = require('./gameboard');

const DOM = () => {
  // Grid factory
  const Grid = (...grids) => {
    let gridLeft = null;
    let gridRight = null;
    const createGrid = (side) => {
      for (let i = 0; i < 100; i += 1) {
        const container = document.getElementById(side);
        const cell = document.createElement('div');
        cell.setAttribute('datacoor', JSON.stringify(Gameboard().ocean[i]));
        if (side === 'left') {
          cell.classList.add('cellLeft');
        } else {
          cell.classList.add('cellRight');
        }
        container.append(cell);
        gridLeft = document.querySelectorAll('.cellLeft');
        gridRight = document.querySelectorAll('.cellRight');
      }
    };
    grids.forEach((side) => createGrid(side));

    gridLeft.forEach((cell) => cell.addEventListener('click', (e) => {
      console.log(e.target);
    }));

    gridRight.forEach((cell) => cell.addEventListener('click', (e) => {
      console.log(e.target);
    }));

    const reset = (side) => {
      const container = document.getElementById(side);
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    };

    const resetGrid = (...boards) => {
      boards.forEach((board) => reset(board));
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
    const reset = document.createElement('button');
    reset.classList.add('reset');
    score.textContent = 'Score';
    info.textContent = 'This game is under construction';
    rotate.textContent = 'Rotate Ship';
    reset.textContent = 'Reset';
    container.append(score, info, harbor, rotate, reset);
  };

  return {
    Grid,
    Menu,
  };
};
module.exports = DOM;
