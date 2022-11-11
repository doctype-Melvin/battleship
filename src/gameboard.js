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

  return {
    ocean,
    makeShip,
    SHIPS,
    isInbounds,
    rotateShip,
    getShipRotation,
  };
};

export default Gameboard;

// const isInbounds = (size, array, rotation = '') => { // call with position[0]
//   let end = null;
//   let bound = null;
//   if (rotation === 'V') {
//     end = array[0][1] - size;
//     bound = [array[0][0], end];
//   } else {
//     end = array[0][0] + size;
//     bound = [end, array[0][1]];
//   }
//   for (let i = 0; i < ocean.length; i += 1) {
//     if (ocean[i].join() === bound.join()) {
//       return true;
//     }
//   }
//   return false;
// };

// const isOverlapping = (occ, pos) => {
//   const result = occ;
//   console.log(result);
//   return result;
// };

// const inGame = [];
// const placeShip = (size, rotation = '', ...coord) => {
//   const start = [];
//   const warship = shipyard(size).ship;
//   start.push([...coord]);

//   if (inGame.length < 5) {
//     if (isInbounds(size, start, rotation)) {
//       for (let i = 1; i < size; i += 1) {
//         if (rotation !== '') { // Rotation is vertical
//           // [warship.position[0][0], warship.position[0][1] - i]
//           start.push([start[0][0], start[0][1] - i]);
//         } else {
//         // [warship.position[0][0] + i, warship.position[0][1]
//           start.push([start[0][0] + i, start[0][1]]);
//         }
//       }
//       if (inGame.length < 1) {
//         start.map((item) => warship.position.push(item));
//         inGame.push(warship);
//       }
//       if (inGame.length > 0) {
//         isOverlapping(inGame, start);
//       }
//     }
//     return inGame;
//   }

//   return null;
// };
