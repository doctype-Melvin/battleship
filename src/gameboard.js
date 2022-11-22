const ship = require('./ship');

const Gameboard = () => {
  const SHIPS = [
    {
      name: 'carrier',
      type: ship('carrier', 5),
    },
    {
      name: 'battleship',
      type: ship('battleship', 4),
    },
    {
      name: 'cruiser',
      type: ship('cruiser', 3),
    },
    {
      name: 'submarine',
      type: ship('submarine', 3),
    },
    {
      name: 'destroyer',
      type: ship('destroyer', 2),
    },
  ];
  const ocean = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      ocean.push([i, j]);
    }
  }

  const getShip = (string) => SHIPS.find((ship) => ship.name === string);

  return {
    SHIPS,
    ocean,
    getShip,
  };
};

module.exports = Gameboard;
