const Gameboard = (vessel) => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      array.push([`${i},${j}`]);
    }
  }

  return {
    array,
  };
};

export default Gameboard;
