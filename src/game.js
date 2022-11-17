const player = require('./player');

const battleship = (() => {
  const P1 = player('human');
  const P2 = player('cpu');
  return {
    P1,
    P2,
  };
})();

export default battleship;
