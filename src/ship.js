const ship = (type, size) => ({
  type,
  size,
  rotation: 'H',
  sunk: false,
  hits: 0,
  position: [],

  hit() {
    this.hits += 1;
    return this.hits;
  },

  isSunk() {
    if (this.size === this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  },

  rotate() {
    if (this.rotation === 'H') {
      this.rotation = 'V';
    } else {
      this.rotation = 'H';
    }
    return this.rotation;
  },

});

module.exports = ship;
