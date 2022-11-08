import ship from './ship';

const Gameboard = () => {
  const SHIPS = [
    { carrier: ship('carrier', 5, 'H') },
    { battleship: ship('battleship', 4, 'H') },
    { criuser: ship('cruiser', 3, 'H') },
    { submarine: ship('submarine', 3, 'H') },
    { destroyer: ship('destroyer', 2, 'H') },
  ];
  const board = [];

  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      board.push({
        position: [x, y],
        vessel: null,
      });
    }
  }

  return {
    board,
    SHIPS,
  };
};

export default Gameboard;
