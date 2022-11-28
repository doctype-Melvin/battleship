const gameboard = require('./gameboard');

const player = (id, opp) => {
  const turn = false;
  const board = gameboard();// Test if board is 'single-reference'

  const fire = (coor, opp) => {
    opp.board.placeAttack(coor);
  };
  const cpuFire = (opp) => {
    opp.board.randomAttack();
  };
  return {
    id,
    opp,
    turn,
    board,
    fire,
    cpuFire,
  };
};

module.exports = player;
