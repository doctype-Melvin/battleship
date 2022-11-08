const ship = (type, length, orient) => ({
  type,
  length,
  orient,
  sunk: false,
  hits: 0,

  hit() {
    this.hits += 1;
    return this.hits;
  },

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  },
});

export default ship;
