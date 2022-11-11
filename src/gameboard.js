import shipyard from './ship.js';

const Gameboard = () => {
  const ocean = [];
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      ocean.push([x, y]);
    }
  }

  const makeShip = (size) => shipyard(size).ship;

  const SHIPS = [
    {
      name: 'carrier',
      type: makeShip(5),
    },
    {
      name: 'battleship',
      type: makeShip(4),
    },
    {
      name: 'cruiser',
      type: makeShip(3),
    },
    {
      name: 'submarine',
      type: makeShip(3),
    },
    {
      name: 'destroyer',
      type: makeShip(2),
    },
  ];

  const inGame = [];

  const getShip = (string) => SHIPS.find((item) => item.name === string).type;

  const getShipSize = (string) => SHIPS.find((item) => item.name === string).type.size;

  const getShipRotation = (string) => SHIPS.find((item) => item.name === string).type.rotation;

  const rotateShip = (string) => SHIPS.find((item) => item.name === string).type.rotate();

  const isInbounds = (position, name) => {
    const size = getShipSize(name) - 1;
    let lastCell = null;
    if (getShipRotation(name) !== 'H') {
      lastCell = [position[0], position[1] - size];
    } else {
      lastCell = [position[0] + size, position[1]];
    }
    const result = ocean.some((item) => item.join() === lastCell.join());
    return (result);
  };

  const createPath = (position, name) => {
    const ship = getShip(name);
    const path = [position];
    for (let i = 1; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([position[0], position[1] - i]);
      } else {
        path.push([position[0] + i, position[1]]);
      }
    }
    ship.position = path;
    return path;
  };

  const placeShip = (position, name) => {
    const ship = getShip(name);
    if (isInbounds(position, name) && inGame.length < 1) {
      inGame.push(ship);
    }
  };
  // isOverlapping(position, name) {
  //
  // }

  return {
    ocean,
    makeShip,
    SHIPS,
    isInbounds,
    rotateShip,
    getShipRotation,
    createPath,
    getShip,
    inGame,
    placeShip,
  };
};

export default Gameboard;
