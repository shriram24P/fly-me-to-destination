function minimumPlanes(array) {
  let n = array.length;
  let planesNeeded = 0;

  // if first airport have less than zero fuel
  if (array[0] <= 0) {
    return (planesNeeded = -1);
  }

  // if first airport have greater than array.length-1 number of fuel
  if (array[0] >= n - 1) {
    return (planesNeeded = 1);
  }

  let currentFuel = 0;
  // if current airport fuel value is not equal to zero,
  //  then we have to set currentFuel value as that array element

  for (let i = 0; i < n - 1; ) {
    if (array[i] != 0) {
      currentFuel = array[i];
      i = i + currentFuel;
      planesNeeded += 1;
    } else {
      // if current airport fuel value is zero,
      // then element value decreses by until gets greater than zero value
      while (array[i] == 0) {
        i = i - 1;
      }
    }
  }
  return planesNeeded;
}

// let array = [2, 1, 2, 3, 1];
let array = [1, 6, 3, 4, 5, 0, 0, 0, 6];
let planesNeeded = minimumPlanes(array);

if (planesNeeded == -1) {
  console.log(`It is not possible to reach the airport`);
} else {
  console.log(`Minimum number of planes needed: ${planesNeeded}`);
}
