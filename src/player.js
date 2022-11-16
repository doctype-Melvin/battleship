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
  randomize() {
    const array = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    return array;
  },
  setRandomAttack() {
    if (this.board.success.length > 0) {
      const next = this.board.success.shift();
      return this.board.placeAttack(next);
    }
    if (!this.board.isPlayable(this.randomize())) {
      this.setRandomAttack();
    }
    return this.board.placeAttack(this.randomize());
  },
  setRandomShip() {
    while (this.board.inGame.length < this.board.SHIPS.length) {
      this.board.SHIPS.map((item) => this.setShip(this.randomize(), item.name));
    }
    console.log(this.board.inGame);
  },
});

export default player;
