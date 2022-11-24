const ship = (name, size) => ({
  name,
  size,
  rotation: 'H',
  hits: 0,
  sunk: false,
  position: [],
  isHit() {
    this.hits += 1;
    return this.hits;
  },
  isSunk() {
    if (this.hits === this.size) {
      this.sunk = true;
    }
    return this.sunk;
  },
  rotate() {
    if (this.rotation !== 'H') {
      this.rotation = 'H';
      return this.rotation;
    } this.rotation = 'V';
    return this.rotation;
  },
});

module.exports = ship;
