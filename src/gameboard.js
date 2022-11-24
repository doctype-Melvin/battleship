const shipMaker = require('./ship');

const Gameboard = () => {
  const SHIPS = [
    {
      name: 'carrier',
      type: shipMaker('carrier', 5),
    },
    {
      name: 'battleship',
      type: shipMaker('battleship', 4),
    },
    {
      name: 'cruiser',
      type: shipMaker('cruiser', 3),
    },
    {
      name: 'submarine',
      type: shipMaker('submarine', 3),
    },
    {
      name: 'destroyer',
      type: shipMaker('destroyer', 2),
    },
  ];
  const ocean = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      ocean.push([i, j]);
    }
  }

  const placed = [];
  const inGame = [];
  const occupied = [];
  const tries = [];
  const success = [];
  const destroyed = [];

  const getShip = (string) => SHIPS.find((obj) => obj.name === string);

  const rotateShip = (string) => getShip(string).type.rotate();

  const inbounds = (string, coor) => {
    const ship = getShip(string).type;
    if (ship.rotation !== 'H') {
      return ocean.some((element) => element.join() === [coor[0], coor[1] - ship.size - 1].join());
    }
    return ocean.some((element) => element.join() === [coor[0] + ship.size - 1, coor[1]].join());
  };

  const makePath = (string, coor) => {
    const ship = getShip(string).type;
    const path = [];
    if (!inbounds(string, coor)) return null;

    for (let i = 0; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([coor[0], coor[1] - i]);
      } else {
        path.push([coor[0] + i, coor[1]]);
      }
    }
    return path;
  };

  const overlaps = (array) => occupied.some((element) => array.some((pos) => element.join() === pos.join()));

  const placeShip = (string, coor) => {
    const ship = getShip(string).type;

    let position = false;
    position = makePath(string, coor);
    if (!position) return null;
    if (overlaps(position)) return null;
    ship.position = position;
    position.forEach((item) => occupied.push(item));
    inGame.push(ship.name);
    placed.push(ship);
    return ship;
  };

  const checkTries = (coor) => tries.every((element) => element.join() !== coor.join());
  const hitsShip = (coor) => occupied.some((element) => element.join() === coor.join());
  const reportLoss = (string) => `${string} has been destroyed`;
  const gameOver = () => ((inGame.length === destroyed.length));

  const placeAttack = (coor) => {
    let object;
    if (checkTries(coor)) { // Hadn't been attacked before
      if (hitsShip(coor)) { // Matches ship's position
        // Find the ship's position array
        object = SHIPS.find((ship) => ship.type.position.some((item) => item.join() === coor.join()));
        object.type.hit();
        success.push(coor);
        if (object.type.isSunk()) {
          destroyed.push(object);
          reportLoss(object.name);
          if (gameOver()) {
            return 'Game Over';
          }
        }
      }
      tries.push(coor);
    }
    return tries;
  };

  return {
    SHIPS,
    placed,
    ocean,
    inGame,
    occupied,
    tries,
    success,
    getShip,
    rotateShip,
    inbounds,
    overlaps,
    makePath,
    placeShip,
    checkTries,
    hitsShip,
    placeAttack,
    reportLoss,
  };
};

module.exports = Gameboard;
