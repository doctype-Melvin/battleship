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
    while (this.board.inGame.length < this.board.SHIPS.length) {
      this.board.SHIPS.forEach((ship) => {
        if (!this.board.inGame.includes(ship.name)) {
          this.board.placeShip(ship.name, this.randomCoor());
        }
      });
    }
  },
});

module.exports = player;
