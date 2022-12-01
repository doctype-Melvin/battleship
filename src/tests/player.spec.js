const player = require('../player');

describe('Player Factory Function', () => {
  const testHuman = player('human', testPlayer);
  const testPlayer = player('test', testHuman);
  it('returns an object', () => {
    expect(typeof testPlayer).toEqual('object');
  });

  it('creates random coordinates', () => {
    expect(Array.isArray(testPlayer.ranCoor())).toEqual(true);
  });

  it('places ships randomly', () => {
    testPlayer.ranShip();
    testHuman.ranShip();
    expect(testPlayer.board.inGame).toHaveLength(5);
    expect(testHuman.board.inGame).toHaveLength(5);
  });

  it('accesses opponent\'s board', () => {
    testPlayer.ranFire();
    expect(testPlayer.opp.board.bombed).toHaveLength(1);
    expect(testHuman.board.bombed).toHaveLength(1);
  });
});
