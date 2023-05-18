function join(array) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += array[i];
      if (i < array.length - 1) {
        str += " ";
      }
    }
    return str;
  }
  
  let myArray = [2, '+', 2,'es igual a', 4];
  let joinedString = join(myArray);
  console.log(joinedString); // Imprime "2 + 2 es igual a 4"