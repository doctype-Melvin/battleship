import Gameboard from './gameboard';

const player = (id) => ({
  id,
  board: Gameboard(),
  setShip(a, b) {
    this.board.placeShip(a, b);
  },
  setAttack(a) {
    return this.board.placeAttack(a);
  },
  rotateShip(shipname) {
    this.board.rotateShip(shipname);
  },
  setRandomAttack() {
    const randomize = () => Math.floor(Math.random() * 9);
    const a = randomize();
    const b = randomize();
    if (this.board.tries.every((item) => item.join() !== [a, b].join())) {
      return this.board.placeAttack([a, b]);
    }
    return this.setRandomAttack();
  },
});

export default player;
