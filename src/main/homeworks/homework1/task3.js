/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2.
*/

const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];

// update only this function
function findInterception(arr1, arr2) {
  let repeatedNames = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        repeatedNames.push(arr1[i])
      }
  }
  return repeatedNames;
}

findInterception(names1, names2);

module.exports = {
  names1,
  names2,
  findInterception,
};
