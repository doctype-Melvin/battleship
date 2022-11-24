const shipMaker = require('./ship');

const gameboard = () => {
  const createOcean = () => {
    const ocean = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        ocean.push([x, y]);
      }
    }
    return ocean;
  };

  const harbor = [
    {
      name: 'destroyer',
      type: shipMaker('destroyer', 2),
    },
    {
      name: 'submarine',
      type: shipMaker('submarine', 3),
    },
    {
      name: 'cruiser',
      type: shipMaker('cruiser', 3),
    },
    {
      name: 'battleship',
      type: shipMaker('battleship', 4),
    },
    {
      name: 'carrier',
      type: shipMaker('carrier', 5),
    },
  ];

  const inGame = [];
  const occupied = [];
  const bombed = [];
  const success = [];

  const getShip = (shipName) => harbor.find((ship) => ship.name === shipName).type;
  return {
    createOcean,
    getShip,
    harbor,
    inGame,
    occupied,
    bombed,
    success,
  };
};

module.exports = gameboard;
