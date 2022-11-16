import player from './player';
import Gameboard from './gameboard';
import battleship from './game';

describe('Game loop module', () => {
  it('Initializes two players and the respective gameboards', () => {
    expect(battleship).toBeDefined();
    expect(battleship.P1.board.ocean).toHaveLength(100);
    expect(battleship.P2.board.ocean).toHaveLength(100);
  });
});
