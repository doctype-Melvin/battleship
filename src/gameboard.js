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

  const getShip = (string) => SHIPS.find((obj) => obj.name === string);

  const inbounds = (string, coor) => {
    const ship = getShip(string);
    if (ship.type.rotation === 'H') {
      return ocean.some((element) => element.join() === [coor[0] + ship.size, coor[1]].join());
    }
    return ocean.some((element) => element.join() === [coor[0], coor[1] - ship.size].join());
  };

  return {
    SHIPS,
    ocean,
    getShip,
    inbounds,
  };
};

module.exports = Gameboard;
