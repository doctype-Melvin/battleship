const shipMaker = require('./ship');

const Gameboard = () => {
  const SHIPS = [
    {
      name: 'carrier',
      type: shipMaker(5),
    },
    {
      name: 'battleship',
      type: shipMaker(4),
    },
    {
      name: 'cruiser',
      type: shipMaker(3),
    },
    {
      name: 'submarine',
      type: shipMaker(3),
    },
    {
      name: 'destroyer',
      type: shipMaker(2),
    },
  ];
  const ocean = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      ocean.push([i, j]);
    }
  }

  const inGame = [];
  const tries = [];
  const occupied = [];
  const success = [];

  const getShip = (string) => SHIPS.find((obj) => obj.name === string);

  const inbounds = (string, coor) => {
    const ship = getShip(string).type;
    if (ship.rotation !== 'H') {
      return ocean.some((element) => element.join() === [coor[0], coor[1] - ship.size - 1].join());
    }
    return ocean.some((element) => element.join() === [coor[0] + ship.size - 1, coor[1]].join());
  };

  const overlaps = (array) => occupied.some((element) => array.every((pos) => element.join() === pos.join()));

  const placeShip = (string, coor) => {
    const ship = getShip(string).type;
    const path = [];
    if (inbounds(string, coor)) {
      for (let i = 0; i < ship.size; i += 1) {
        if (ship.rotation !== 'H') {
          path.push([coor[0], coor[1] - i]);
        }
        path.push([coor[0] + i, coor[1]]);
      }
    }
    if (!overlaps(path)) {
      path.forEach((cell) => occupied.push(cell) && ship.position.push(cell));
      inGame.push(ship);
    }
    return occupied;
  };

  const checkTries = (coor) => tries.every((element) => element.join() !== coor.join());
  const hitsShip = (coor) => occupied.some((element) => element.join() === coor.join());

  const placeAttack = (coor) => {
    let object;
    if (checkTries(coor)) {
      if (hitsShip(coor)) {
        object = SHIPS.find((ship) => ship.type.position.some((item) => item.join() === coor.join()));
        object.type.hit();
        success.push(coor);
      }
      tries.push(coor);
    }
    return tries;
  };

  return {
    SHIPS,
    ocean,
    inGame,
    occupied,
    tries,
    success,
    getShip,
    inbounds,
    overlaps,
    placeShip,
    checkTries,
    hitsShip,
    placeAttack,
  };
};

module.exports = Gameboard;
