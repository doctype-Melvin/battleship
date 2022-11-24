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

  const makePath = (shipName, coor) => {
    const ship = getShip(shipName);
    const path = [];
    for (let i = 0; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([coor[0], coor[1] - i]);
      } else {
        path.push([coor[0] + i, coor[1]]);
      }
    }
    ship.position = path;
    return path;
  };

  return {
    createOcean,
    getShip,
    makePath,
    harbor,
    inGame,
    occupied,
    bombed,
    success,
  };
};

module.exports = gameboard;
