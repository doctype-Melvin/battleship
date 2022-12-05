const shipFac = require('./ship');

const gameboard = () => {
// Arrays for tracking position and game progress
  const inGame = []; // Stores placed ships
  const occupied = []; // Stores all coordinates of ship positions
  const bombed = []; // Stores all tries
  const destroyed = []; // Stores all destroyed ships
  const onTarget = [];
  const ocean = [];

  const makeWater = () => { // Creates the 10 x 10 coordinate grid
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        ocean.push([x, y]);
      }
    }
    return ocean;
  };
  makeWater();

  // Harbor stores ship types
  const harbor = [
    {
      name: 'destroyer',
      type: shipFac('destroyer', 2),
    },
    {
      name: 'submarine',
      type: shipFac('submarine', 3),
    },
    {
      name: 'cruiser',
      type: shipFac('cruiser', 3),
    },
    {
      name: 'battleship',
      type: shipFac('battleship', 4),
    },
    {
      name: 'carrier',
      type: shipFac('carrier', 5),
    },
  ];

  // Checks if last occupied cell of ship is inbounds
  const isInbounds = (pos) => ocean.some((coor) => coor.join() === pos.join());
  // Goes through occupied positions to prevent overlapping
  const isOverlap = (array) => occupied.some((coor) => array.some((pos) => pos.join() === coor.join()));
  // Goes through inGame array to prevent duplicate ship types
  const isPlaced = (ship) => inGame.some((vessel) => ship.name === vessel.name);
  // Gets ship from harbor array
  const getShip = (name) => harbor.find((ship) => ship.name === name);
  // Creates the ship's path
  const makePath = (size, rot, coor) => {
    const path = [];
    if (rot !== 'H') {
      for (let y = 0; y < size; y += 1) {
        path.push([coor[0], coor[1] - y]);
      }
    } else {
      for (let x = 0; x < size; x += 1) {
        path.push([coor[0] + x, coor[1]]);
      }
    }
    return path;
  };

  // Check valid ship placement
  let position = null; // Variable to store ship's path
  const isValPos = (ship, coor) => { // Combines all validity tests
    position = makePath(ship.type.size, ship.type.rotation, coor); // Create the possible path
    return (isInbounds(position[position.length - 1]) && !isOverlap(position) && !isPlaced(ship));
  };

  const placeShip = (shipName, coor) => {
    const ship = getShip(shipName);
    if (isValPos(ship, coor)) { // Check placement validity
      position.forEach((pos) => ship.type.position.push(pos));
      position.forEach((pos) => occupied.push(pos));
      inGame.push(ship);
    } else {
      position = null; // Reset the position array
      // Report error if(isOverlap(position)) errorHandler(1)
    }
    return inGame;
  };

  // Checks valid attack
  const known = (coor) => bombed.some((pos) => pos.join() === coor.join());
  // Checks attack success
  const bullseye = (coor) => occupied.some((pos) => pos.join() === coor.join());
  // Finds the attacked ship
  const findShip = (coor) => inGame.filter((item) => item.type.position.find((pos) => pos.join() === coor.join()))[0];
  // Checks destroyed ship
  const isDestroyed = (ship) => ship.type.isSunk();
  // Store all unbombed cells
  const unknown = () => ocean.filter((item) => bombed.every((pos) => item.join() !== pos.join()));
  // Creates a attack queue for the cpu player
  const Q = [];
  const nextAttacks = (arr) => {
    const up = [arr[0], arr[1] + 1];
    const right = [arr[0] + 1, arr[1]];
    const down = [arr[0], arr[1] - 1];
    const left = [arr[0] - 1, arr[1]];
    const directions = [up, right, down, left];
    const isIn = directions.filter((item) => isInbounds(item));
    const isFree = isIn.filter((pos) => !known(pos));
    const notInQ = isFree.filter((loc) => Q.every((el) => el.join() !== loc.join()));
    notInQ.forEach((coor) => Q.push(coor));
  };
  // Places attacks
  const fire = (coor) => {
    if (known(coor)) return null;
    if (bullseye(coor)) {
      const target = findShip(coor);
      target.type.isHit();
      nextAttacks(coor);
      onTarget.push(coor);
      console.log(`hit ${coor}`);
      if (isDestroyed(target)) {
        destroyed.push(target);
        console.log(destroyed);
      } // Report success
      bombed.push(coor);
    } else if (!known(coor) && !bullseye(coor)) {
      // Report miss
      bombed.push(coor);
      console.log('MISS');
    }
    return bombed;
  };

  const allInPlace = () => (inGame.length === 5);

  return {
    ocean,
    occupied,
    harbor,
    inGame,
    bombed,
    destroyed,
    Q,
    onTarget,
    isInbounds,
    isOverlap,
    isPlaced,
    getShip,
    isValPos,
    placeShip,
    known,
    fire,
    allInPlace,
    unknown,
  };
};

module.exports = gameboard;
