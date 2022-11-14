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

  const rotateShip = (string) => SHIPS.find((item) => item.name === string).type.rotate();

  const isInbounds = (position, name) => {
    const size = getShip(name).size - 1;
    let lastCell = null;
    if (getShip(name).rotation !== 'H') {
      lastCell = [position[0], position[1] - size];
    } else {
      lastCell = [position[0] + size, position[1]];
    }
    const result = ocean.some((item) => item.join() === lastCell.join());
    return (result);
  };

  const createPath = (position, name) => {
    const path = [position];
    const ship = getShip(name);
    for (let i = 1; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([position[0], position[1] - i]);
      } else {
        path.push([position[0] + i, position[1]]);
      }
    }
    return path;
  };

  const isOverlapping = (array, name) => {
    if (array.length > 0) {
      const shipPath = getShip(name).position;
      const check = array.map((ship) => ship.position.map((element) => shipPath.some((el) => element.join() === el.join())));
      return check.flat().some((results) => results === true);
    }
    return false;
  };

  const placeShip = (position, name) => {
    const ship = getShip(name);
    if (inGame.length < 1 && isInbounds(position, name)) {
      ship.position = createPath(position, name);
      inGame.push(ship);
      // console.log(inGame[0]);
    } else if (inGame.length > 0 && isInbounds(position, name)) {
      ship.position = createPath(position, name);
      if (!isOverlapping(inGame, name)) {
        inGame.push(ship);
      }
    }
  };

  const tries = [];
  const placeAttack = (coor) => SHIPS.map((ship) => ship.type.position.map((position) => position.join() === coor.join()));

  return {
    ocean,
    makeShip,
    SHIPS,
    isInbounds,
    rotateShip,
    createPath,
    getShip,
    inGame,
    placeShip,
    isOverlapping,
    placeAttack,
  };
};

export default Gameboard;
