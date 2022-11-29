const controller = require('../game');

describe('Controller ', () => {
  const newGame = controller();
  it('creates two players', () => {
    expect(typeof newGame.human).toEqual('object');
    expect(typeof newGame.roboto).toEqual('object');
  });
  it('sets the human players turn to true after placing all ships', () => {
    expect(newGame.human.turn).toEqual(false);
    expect(newGame.roboto.board.inGame).toHaveLength(5);
    expect(newGame.human.board.inGame).toHaveLength(0);
  });
});
