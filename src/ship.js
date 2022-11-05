const ship = (length, hits, sunk, orient) => ({
  length,
  hits,
  sunk,
  getOrientation() {
    return orient;
  },
  hit() {
    this.hits += 1;
    return this.hits;
  },
  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
      return this.sunk;
    }
    return this.sunk;
  },
});

export default ship;
