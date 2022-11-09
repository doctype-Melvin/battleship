import shipyard from './ship';

const Gameboard = () => {
  const ocean = [];
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      ocean.push([x, y]);
    }
  }

  const isInbounds = (size, array, rotation = '') => { // call with position[0]
    let end = null;
    let bound = null;
    if (rotation === 'V') {
      end = array[1] - size;
      bound = [array[0], end];
    } else {
      end = array[0] + size;
      bound = [end, array[1]];
    }
    for (let i = 0; i < ocean.length; i += 1) {
      if (ocean[i].join() === bound.join()) {
        return true;
      }
    }
    return false;
  };

  const placeShip = (size, rotation = '', ...coord) => {
    const warship = shipyard(size).ship;
    warship.position.push([...coord]);
    if (isInbounds(size, warship.position[0], rotation)) {
      for (let i = 1; i < size; i += 1) {
        if (rotation !== '') { // Rotation is vertical
          warship.position.push(
            [warship.position[0][0], warship.position[0][1] - i],
          );
        }
        warship.position.push(
          [warship.position[0][0] + i, warship.position[0][1]],
        );
      }
      return warship;
    }
    return null;
  };
  return {
    ocean,
    placeShip,
    isInbounds,
  };
};

export default Gameboard;
