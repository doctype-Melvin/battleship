import Gameboard from './gameboard';

const player = (id) => ({
  id,
  board: Gameboard(),
  setShip(pos, name) {
    this.board.placeShip(pos, name);
  },
  setAttack(a) {
    return this.board.placeAttack(a);
  },
  rotateShip(shipname) {
    this.board.rotateShip(shipname);
  },
  setRandomAttack() {
    const randomize = () => Math.floor(Math.random() * 10);
    const x = randomize();
    const y = randomize();

    if (this.board.success.length > 0) {
      const next = this.board.success.shift();
      return this.board.placeAttack(next);
    }
    if (!this.board.isPlayable([x, y])) {
      this.setRandomAttack();
    }
    return this.board.placeAttack([x, y]);
  },
});

export default player;
