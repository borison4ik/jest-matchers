function sortByHealth(arr) {
  return arr.slice().sort((a, b) => {
    if (a && a.health && b && b.health) {
      if (a.health > b.health) {
        return -1;
      }
      if (a.health < b.health) {
        return 1;
      }
    }
    return 0;
  });
}

export default sortByHealth;
