const Gameboard = (vessel) => {
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

export default Gameboard;
