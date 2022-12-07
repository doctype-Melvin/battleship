const gameboard = require('./gameboard');
const elementMaker = require('./helper');
// MVC View
const viewer = ((gameboards) => {
  // Creates menu section info box and buttons
  const menuSection = document.querySelector('.menu');
  menuSection.append(elementMaker('div', 'info', 'This is the game info', 'info'));
  gameboard().harbor.forEach((ship) => menuSection.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
  const harborBtns = document.querySelectorAll('.shipBtn');
  const infoBox = document.getElementById('info');
  menuSection.append(elementMaker('button', 'rotate', 'ROTATE', 'rotate'));
  const rotateBtn = document.querySelector('.rotate');
  menuSection.append(elementMaker('button', 'random', 'RANDOM', 'random'));
  const randomBtn = document.querySelector('.random');
  menuSection.append(elementMaker('button', 'reset', 'RESTART', 'restart'));
  const restartBtn = document.querySelector('.reset');

  const makeMenu = () => {
    menuSection.append(elementMaker('div', 'info', 'This is the game info', 'info'));
    gameboard().harbor.forEach((ship) => menuSection.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
    menuSection.append(elementMaker('button', 'random', 'RANDOM', 'random'));
    menuSection.append(elementMaker('button', 'reset', 'RESTART', 'restart'));
  };

  // Grid factory
  const makeGrid = (id, side) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add(id);
      cell.setAttribute('datacoord', JSON.stringify(gameboard().ocean[i]));
      side.append(cell);
    }
    return side;
  };

  // Creates grids for each side
  gameboards.forEach((side) => makeGrid(side.id, side));

  // Nodelists for grids
  const leftParent = document.getElementById('ships');
  const rightParent = document.getElementById('attacks');
  let left = document.querySelectorAll('.ships');
  let right = document.querySelectorAll('.attacks');

  // Changes grids color upon attack/hit
  const trackAttack = (input, array) => { // input = div
    if (array.length !== 0) {
      array.forEach((pos) => {
        if (input.attributes[1].value === JSON.stringify(pos)) {
          input.removeAttribute('class');
          input.setAttribute('class', 'hit');
        } else {
          input.setAttribute('class', 'bombed');
        }
      });
    } else {
      input.removeAttribute('class');
      input.setAttribute('class', 'bombed');
    }
  };

  // Replaces cells with copies
  const removeListeners = (grid) => {
    grid.forEach((node) => node.replaceWith(node.cloneNode(true)));
  };

  // Report function displays messages in infoBox element
  const statusReport = (element, status) => {
    switch (status) {
      case 1: element.textContent = 'Enemy destroyed our fleet!';
        break;
      case 2: element.textContent = 'Victory! We destroyed our enemy!';
        break;
      case 3: element.textContent = 'Vertical';
        break;
      case 4: element.textContent = 'Horizontal';
        break;
      case 5: element.textContent = 'Next Ship';
        break;
      case 6: element.textContent = 'It\'s time to attack!';
        break;
      default: element.textContent = 'The enemy is in our waters! Place your ships!';
    }
  };

  // Game over evaluation
  const isGameOver = (ply, cpu) => {
    if (ply.board.destroyed.length === 5) {
      console.log('Enemy destroyed our fleet');
      removeListeners(right);
      statusReport(infoBox, 1);
      return true;
    } if (cpu.board.destroyed.length === 5) {
      console.log('We destroyed our enemy!');
      removeListeners(right);
      statusReport(infoBox, 2);
      return true;
    } return false;
  };

  const findDiv = (value, nodelist) => {
    const target = JSON.stringify(value);
    const div = [...nodelist].filter((item) => item.attributes[1].value === target)[0];
    return div;
  };
  // Sets cpu attack
  const cpuAttack = (player, opp) => {
    opp.ranFire();
    const current = player.board.bombed[player.board.bombed.length - 1];
    const div = findDiv(current, left);
    trackAttack(div, player.board.onTarget);
  };

  // Initiates attacks on cpu grid
  const attackPhase = (grid, player, opp) => {
    grid.forEach((cell) => cell.addEventListener('click', () => {
      const target = JSON.parse(cell.attributes[1].value);
      opp.board.fire(target);
      trackAttack(cell, opp.board.onTarget);
      if (isGameOver(player, opp)) {
        console.log('GAME OVER');
        return true;
      }
      setTimeout(() => {
        cpuAttack(player, opp);
        if (isGameOver(player, opp)) {
          console.log('GAME OVER');
          return true;
        }
      }, 450);
    }));
  };

  // Change cell coloring
  const shipPlaced = (player) => {
    player.board.inGame.forEach((ship) => {
      const shipPos = ship.type.position;

      [...shipPos].forEach((point) => {
        [...left].forEach((data) => {
          if (data.attributes[1].value === JSON.stringify(point)) {
            // data.removeAttribute('class');
            data.setAttribute('class', 'placed');
          }
        });
      });
    });
  };

  const tempRan = (player) => {
    player.ranShip();
    shipPlaced(player);
    player.opp.ranShip();
    statusReport(infoBox, 6);
    attackPhase(right, player, player.opp);
  };

  const placePhase = (view, player, opp) => {
    randomBtn.addEventListener('click', () => tempRan(player));
    statusReport(infoBox, null);
    let ship = null;
    view.harborBtns.forEach((btn) => btn.addEventListener('click', () => {
      ship = btn.id;
    }));
    view.rotateBtn.addEventListener('click', () => {
      if (ship === null) return;
      player.board.getShip(ship).type.rotate();
      if (player.board.getShip(ship).type.rotation === 'H') {
        statusReport(infoBox, 4);
      } else {
        statusReport(infoBox, 3);
      }
    });
    view.left.forEach((cell) => cell.addEventListener('click', () => {
      if (!ship) return 'Please choose a ship';
      player.board.placeShip(ship, JSON.parse(cell.attributes[1].value));
      shipPlaced(player);
      statusReport(infoBox, 5);
      if (player.board.inGame.length === 5
        && opp.board.inGame.length < 5) {
        // removeListeners(view.left);
        opp.ranShip();
        statusReport(infoBox, 6);
        attackPhase(right, player, opp);
      }
    }));
  };

  const clearDisplay = (...grids) => {
    [...grids].forEach((side) => {
      while (side.firstChild) {
        side.removeChild(side.lastChild);
      }
    });
    gameboards.forEach((side) => makeGrid(side.id, side));
    left = document.querySelectorAll('.ships');
    right = document.querySelectorAll('.attacks');
  };

  return {
    leftParent,
    rightParent,
    left,
    right,
    harborBtns,
    rotateBtn,
    restartBtn,
    menuSection,
    clearDisplay,
    placePhase,
    removeListeners,
  };
})([document.getElementById('ships'), document.getElementById('attacks')]);

module.exports = viewer;
