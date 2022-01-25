import sortByHealth from '../components/sortByHealth';

const notSortedArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const sortedArray = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
  { name: 'мечник', health: 10 },
];

describe('Sort by health function:', () => {
  test('should return false', () => {
    expect(sortByHealth([{ name: 'маг', health: 100 }])).toEqual([{ name: 'маг', health: 100 }]);
  });
  test('should return 0', () => {
    expect(sortByHealth([{ name: 'маг' }, { name: 'лучник', health: 80 }])).toEqual([
      { name: 'маг' },
      { name: 'лучник', health: 80 },
    ]);
  });
  test('should return new array', () => {
    expect(sortByHealth(notSortedArray)).not.toBe(notSortedArray);
  });
  test('should return sort arr', () => {
    expect(sortByHealth(notSortedArray)).toEqual(sortedArray);
  });
});
