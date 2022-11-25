const shipMaker = require('./ship');

const gameboard = () => {
  const createOcean = () => {
    const grid = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        grid.push([x, y]);
      }
    }
    return grid;
  };

  const ocean = createOcean();

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

  const isInbounds = (ship, coor) => {
    const lastCell = () => {
      let tail;
      if (ship.rotation !== 'H') {
        tail = [coor[0], coor[1] - ship.size + 1];
      } else {
        tail = [coor[0] + ship.size - 1, coor[1]];
      }
      return tail;
    };
    return ocean.some((cell) => cell.join() === lastCell().join());
  };

  const makePath = (ship, coor) => {
    const path = [];
    for (let i = 0; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([coor[0], coor[1] - i]);
      } else {
        path.push([coor[0] + i, coor[1]]);
      }
    }

    return path;
  };

  const isOverlay = (array) => {
    const toString = (arr) => arr.map((item) => item.join());
    const toStringOcc = toString(occupied);
    const toStringPath = toString(array);
    const hasDupes = () => toStringOcc.some((el) => toStringPath.some((item) => el === item));
    return hasDupes();
  };

  const illegalHandler = (value) => {
    if (value === 1) {
      console.log('Ship is out of bounds');
      return 'out of bounds';
    }
    console.log('Ship overlays');
    return 'path is blocked by another ship';
  };

  const placeShip = (shipName, coor) => {
    const ship = getShip(shipName);
    if (!isInbounds) return illegalHandler(1);
    const shipPath = makePath(ship, coor);
    if (occupied.length < 1) {
      ship.position = shipPath;
      shipPath.forEach((pos) => occupied.push(pos));
    } else if (!isOverlay(shipPath)) {
      ship.position = shipPath;
      shipPath.forEach((pos) => occupied.push(pos));
    } else {
      return illegalHandler(2);
    }
    return shipPath;
  };
  // Place ship function will call several helper/test functions
  // If test functions succeed the ship can be placed
  // Else there is a method of handling illegal placements

  return {
    createOcean,
    getShip,
    isInbounds,
    makePath,
    isOverlay,
    placeShip,
    ocean,
    harbor,
    inGame,
    occupied,
    bombed,
    success,
  };
};

module.exports = gameboard;
