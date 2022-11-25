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
    const lastCell = () => { // Create last position coor
      let tail;
      if (ship.rotation !== 'H') {
        tail = [coor[0], coor[1] - ship.size + 1]; // Go down y axis
      } else {
        tail = [coor[0] + ship.size - 1, coor[1]]; // Go down x axis
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
    const toString = (arr) => arr.map((item) => item.join()); // Function returns array as string
    const toStringOcc = toString(occupied);
    const toStringPath = toString(array);
    return toStringOcc.some((el) => toStringPath.some((item) => el === item));
  };

  const illegalHandler = (value) => {
    if (value === 1) {
      return 'out of bounds';
    }
    return 'path is blocked by another ship';
  };

  const placeShip = (shipName, coor) => {
    const ship = getShip(shipName);
    if (!isInbounds) return illegalHandler(1); // Returns for out of bounds placement
    const shipPath = makePath(ship, coor);
    if (occupied.length < 1) { // No ship has been placed yet
      ship.position = shipPath; // Set ship position
      shipPath.forEach((pos) => occupied.push(pos)); // Populate occupied array
    } else if (!isOverlay(shipPath)) { // Check if ships overlay
      ship.position = shipPath;
      shipPath.forEach((pos) => occupied.push(pos));
    } else {
      return illegalHandler(2); // Returns if ships overlay
    }
    inGame.push(ship);
    return ship;
  };

  const randomShips = () => {
    const randomCoor = () => { // Creates random coor
      const randomNum = (min = 0, max = 10) => Math.floor(Math.random() * (max - min) + min);
      let x; const // Weird way of doing that
        y = randomNum();
      return [x, y];
    };

    while (inGame.length < harbor.length) {
      harbor[Math.floor(Math.random() * 5)].type.rotate(); // Rotate a random ship
      if (inGame.length > 1) {
        harbor.forEach((ship) => { // Avoid duplicating ship types
          if (inGame.every((item) => item.name !== ship.name)) {
            placeShip(ship.name, randomCoor());
          }
        });
      } else {
        harbor.forEach((ship) => placeShip(ship.name, randomCoor())); // Places the first ship
      }
    }

    return inGame;
  };

  const checkTarget = (coor) => {
    inGame.forEach((ship) => { // Checks if coor matches ship position
      if (ship.position.some((pos) => pos.join() === coor.join())) { // Succsessful attack
        ship.isHit();
        console.log('Success');
        success.push(coor);
      } else {
        console.log('Water'); // Missed target
      }
    });
    bombed.push(coor);
  };

  const placeAttack = (coor) => {
    if (bombed.length < 1) { // No attacks yet
      checkTarget(coor); // Check for attack success
    } else if (bombed.every((pos) => pos.join() !== coor.join())) { // Cell hasn't been attacked
      checkTarget(coor); // Check for attack succes
    } else {
      return illegalHandler(1); // Cell has been attacked
    }
    return bombed;
  };

  return {
    createOcean,
    getShip,
    isInbounds,
    makePath,
    isOverlay,
    placeShip,
    randomShips,
    placeAttack,
    ocean,
    harbor,
    inGame,
    occupied,
    bombed,
    success,
  };
};

module.exports = gameboard;
