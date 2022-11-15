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

  const getShip = (string) => SHIPS.find((item) => item.name === string);

  const rotateShip = (string) => SHIPS.find((item) => item.name === string).type.rotate();

  const isInbounds = (position, name) => {
    const size = getShip(name).type.size - 1;
    let lastCell = null;
    if (getShip(name).type.rotation !== 'H') {
      lastCell = [position[0], position[1] - size];
    } else {
      lastCell = [position[0] + size, position[1]];
    }
    const result = ocean.some((item) => item.join() === lastCell.join());
    return (result);
  };

  const createPath = (position, name) => {
    const path = [position];
    const ship = getShip(name).type;
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
      const shipPath = getShip(name).type.position;
      const check = array.map((ship) => ship.type.position.map((element) => shipPath.some((el) => element.join() === el.join())));
      return check.flat().some((results) => results === true);
    }
    return false;
  };

  const placeShip = (position, name) => {
    // DOM if ship's position array is > 0
    // remove eventlistener
    const ship = getShip(name);
    if (inGame.length < 1 && isInbounds(position, name)) {
      ship.type.position = createPath(position, name);
      inGame.push(ship);
    } else if (inGame.length > 0 && isInbounds(position, name)) {
      ship.type.position = createPath(position, name);
      if (!isOverlapping(inGame, name)) {
        inGame.push(ship);
      }
    }
  };

  const isSunkReport = (name) => `${name} has been wrecked`;

  const tries = [];
  const placeAttack = (coor) => {
    // if isPlayable remove eventlistener after
    // this way the cell will not be clickable
    const isPlayable = () => tries.every((item) => item.join() !== coor.join());
    if (isPlayable(coor)) {
      tries.push(coor);
      for (let i = 0; i < SHIPS.length; i += 1) {
        for (let j = 0; j < SHIPS[i].type.position.length; j += 1) {
          if (coor.join() === SHIPS[i].type.position[j].join()) {
            SHIPS[i].type.hit();
            if (SHIPS[i].type.isSunk()) {
              return isSunkReport(SHIPS[i].name);
            }

            return true;
          }
        }
      }
      return false;
    }
    return 'played';
  };

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
    tries,
    isSunkReport,
  };
};

export default Gameboard;
