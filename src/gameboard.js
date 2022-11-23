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

  const tries = [];
  const occupied = [];

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
    }
    return occupied;
  };

  return {
    SHIPS,
    ocean,
    occupied,
    getShip,
    inbounds,
    overlaps,
    placeShip,
  };
};

module.exports = Gameboard;
