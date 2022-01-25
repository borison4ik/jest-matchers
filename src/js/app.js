import sortByHealth from './components/sortByHealth';

const newArr = sortByHealth([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

console.log(newArr);
