const gameboard = require('./gameboard');

const player = (id, opp) => {
  const turn = false;
  const board = gameboard();
  // Needs method to switch turns after attack
  const fire = (coor, opp) => {
    opp.board.placeAttack(coor);
    opp.turn = true;
  };
  const cpuFire = (opp) => {
    opp.board.randomAttack();
    opp.turn = true;
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
