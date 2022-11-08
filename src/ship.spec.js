import ship from './ship';

describe('Ship factory function', () => {
  it('returns an object', () => {
    expect(typeof ship()).toEqual('object');
  });

  test('objects have a "hit" method that returns a value', () => {
    expect(ship().hit()).toEqual(expect.anything());
  });
});
