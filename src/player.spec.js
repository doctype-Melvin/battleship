import player from './player.js';

describe('Player factory function', () => {
  const P1 = player('human');
  const P2 = player('machine');

  it('creates a gameboard for player', () => {
    expect(P1.board.ocean).toHaveLength(100);
  });

  it('can place ships on the player\'s board', () => {
    expect(P1.setShip([0, 0], 'battleship')).toEqual(undefined);
    expect(P1.board.inGame).toHaveLength(1);
  });

  it('can attack the opponent\'s board', () => {
    expect(P2.setAttack([3, 3])).toEqual(false); // P1 attacks
    expect(P2.board.tries.length).toBeGreaterThan(0);
    expect(P1.setRandomAttack()).toBeDefined(); // P2 attacks
    expect(P1.board.tries.length).toBeGreaterThan(0);
  });

  it('creates a queue for the AI to place next attack', () => {
    P1.setShip([0, 0], 'battleship');
    expect(P1.board.inGame).toHaveLength(1);
    P1.board.placeAttack([1, 0]);
    expect(P1.board.success).toHaveLength(3);
  });
});
