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
    if (this.board.success.length < 1) {
      return this.board.placeAttack([a, b]);
    } if (this.board.success.length > 0) {
      const next = this.board.success.shift();
      this.board.setAttack(next);
    }
    return this.setRandomAttack();
  },
});

export default player;
