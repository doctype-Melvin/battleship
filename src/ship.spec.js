import ship from './ship';

describe('Ship factory function', () => {
  it('returns an object', () => {
    expect(typeof ship()).toEqual('object');
  });

  test('objects have a "hit" method that returns', () => {
    expect(ship().hit()).toEqual(expect.anything());
  });

  test('objects have a "isSunk" method that returns', () => {
    expect(ship().isSunk()).toEqual(expect.anything());
  });
});
