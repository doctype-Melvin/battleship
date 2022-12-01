const shipFac = (name, size) => ({
  name,
  size,
  damage: 0,
  rotation: 'H',
  position: [],
  isHit() {
    this.damage += 1;
    return this.damage;
  },
  rotate() {
    if (this.rotation !== 'V') {
      this.rotation = 'V';
    } else {
      this.rotation = 'H';
    }
    return this.rotation;
  },
  isSunk() {
    if (this.damage === this.size) {
      return true;
    } return false;
  },
});

module.exports = shipFac;
