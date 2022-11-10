import Battleship from './gameboard';

describe('Battleship gameboard', () => {
  const board = Battleship().ocean;
  it('returns an array', () => {
    expect(Array.isArray(board)).toEqual(true);
  });

  it('has a length of 100', () => {
    expect(board).toHaveLength(100);
  });

  it.todo('contains arrays with two elements (coordinates and null)');
  it.todo('has a method to place ships');
  it.todo('has a method to avoid overlapping ships');
  it.todo('tracks the number of ships placed or has a stash of ships');
  it.todo('has a method to receive attacks');
  it.todo('evaluates attack success');
});
