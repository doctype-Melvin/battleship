const battleship = require('./game');

describe.skip('Game loop module', () => {
  it('Initializes two players and the respective gameboards', () => {
    expect(battleship().human.board.ocean).toHaveLength(100);
    expect(battleship().bot.board.inGame).toHaveLength(5);
  });
  it('resets the players', () => {
    expect(battleship().gameReset().human.board.inGame).toHaveLength(0);
  });
});
