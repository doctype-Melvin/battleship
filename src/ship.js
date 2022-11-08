const ship = (type, length, orient) => ({
  type,
  length,
  orient,
  sunk: false,
  hits: 0,

  hit() {
    return this.hits;
  },
});

export default ship;
