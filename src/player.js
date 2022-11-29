const gameboard = require('./gameboard');

const player = (id, opp) => {
  let turn = false;
  const board = gameboard();

  const setShip = (ship, coor) => {
    board.placeShip(ship, coor);
  };
  const fire = (coor) => {
    opp.board.placeAttack(coor);
    opp.turn = true;
    turn = false;
  };
  const cpuFire = (opp) => {
    opp.board.randomAttack();
    opp.turn = true;
    turn = false;
  };
  return {
    id,
    opp,
    turn,
    board,
    setShip,
    fire,
    cpuFire,
  };
};

module.exports = player;
