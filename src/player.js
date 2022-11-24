const Gameboard = require('./gameboard');

const player = (name) => ({
  name,
  board: Gameboard(),
  randomCoor(min = 0, max = 10) {
    const x = Math.floor(Math.random() * (max - min) + min);
    const y = Math.floor(Math.random() * (max - min) + min);
    return [x, y];
  },
  randomShips() {
    this.board.SHIPS[Math.floor(Math.random() * 5)].type.rotate();
    this.board.SHIPS[Math.floor(Math.random() * 5)].type.rotate();
    while (this.board.inGame.length < this.board.SHIPS.length) {
      this.board.SHIPS.forEach((ship) => {
        if (!this.board.inGame.includes(ship.name)) {
          this.board.placeShip(ship.name, this.randomCoor());
        }
      });
    }
  },
  randomAttack() {
    if (this.board.nextAttack.length < 1) {
      return this.board.placeAttack(this.randomCoor());
    }
    const next = this.board.nextAttack.shift();
    return this.board.placeAttack(next);
  },
});

module.exports = player;
