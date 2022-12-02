const gameboard = require('./gameboard');

const player = (id, opp) => ({
  id,
  opp,
  board: gameboard(),
  turn: false,
  ranCoor() {
    const ranNum = (min = 0, max = 10) => {
      const int = Math.floor(Math.random() * (max - min) + min);
      return int;
    };
    const x = ranNum();
    const y = ranNum();
    return [x, y];
  },
  ranShip() {
    while (this.board.inGame.length < this.board.harbor.length) {
      this.board.harbor[2].type.rotate();
      this.board.harbor.forEach((ship) => {
        this.board.placeShip(ship.name, this.ranCoor());
      });
    }
  },
  ranFire() {
    let target = this.ranCoor();
    if (this.opp.board.Q.length > 0) {
      const next = this.opp.board.Q.shift();
      this.opp.board.fire(next);
    } else if (this.opp.board.bombed.length < 1) {
      this.opp.board.fire(target);
    } else {
      target = this.opp.board.unknown()[Math.floor(Math.random() * this.opp.board.unknown().length)];
      this.opp.board.fire(target);
    }
  },

});

module.exports = player;
