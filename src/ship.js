const shipyard = (size) => {
  const ship = {
    size,
    hits: 0,
    sunk: false,
    position: [],
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

export default shipyard;
