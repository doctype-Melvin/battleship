// import './style.css';

const ship = (length, hits, sunk) => ({
  length,
  hits,
  sunk,
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

const Gameboard = () => {
  const array = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      array.push([`${i},${j}`]);
    }
  }
  return {
    array,
  };
};

module.exports = ship;
