const player = require('../player');

describe('Player Object', () => {
  it('creates a player and their gameboard', () => {
    const human = player('human', 'roboto');
    expect(human.board.ocean).toHaveLength(100);
    expect(human.board.inGame).toHaveLength(0);
  });

  it('can attack opponents board', () => {
    const human = player('human', 'roboto');
    const roboto = player('roboto', 'human');
    human.board.randomShips();
    roboto.board.randomShips();
    expect(roboto.board.inGame).toHaveLength(5);
    expect(roboto.board.bombed).toHaveLength(0);
    human.cpuFire(roboto);
    expect(roboto.turn).toEqual(true);
    expect(human.turn).toEqual(false);
    expect(roboto.board.bombed.length).toBeGreaterThan(0);
    expect(human.board.bombed).toHaveLength(0);
    roboto.cpuFire(human);
    expect(human.board.bombed).toHaveLength(1);
  });
});
