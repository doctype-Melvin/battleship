import ship from './ship';

const Gameboard = () => {
  const board = [];

  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      board.push({
        psotion: [x, y],
        vessel: null,
      });
    }
  }

  return {
    board,
  };
};
export default Gameboard;
