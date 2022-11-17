const shipyard = (size) => {
  const ship = {
    size,
    hits: 0,
    sunk: false,
    position: [],
    rotation: 'H',
    rotate() {
      if (this.rotation === 'H') {
        this.rotation = 'V';
      } else {
        this.rotation = 'H';
      }
      return this.rotation;
    },
    hit() {
      this.hits += 1;
      return this.hits;
    },
    isSunk() {
      if (this.hits === this.size) {
        this.sunk = true;
      }
      return this.sunk;
    },
  };
  return {
    ship,
  };
};

module.exports = shipyard;
