'use strict'
// No cambies los nombres de las funciones.

function quickSort(array = []) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let result = []
  if (array.length > 1) {
    result = array.splice(0, 1);
    const right = []
    const left = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element > result[0]) {
        right.push(element);
      }
      else {
        left.push(element)
      }
    }
    result.unshift(...quickSort(left))
    result.push(...quickSort(right))
  } else {
    return array
  }
  return result;
}
//console.log(quickSort([6, 4, 3, 2, 7, 5, 9]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  //debe ser par, si no es par debe mandar un error

  if (array.length > 1) {
    let right;
    let left;
    if (array.length === 3) {
      right = mergeSort([array[0]]);
      left = mergeSort([array[1],array[2]]);
    } else {
      const indice = array.length / 2 >> 0
      right = mergeSort(array.slice(0, indice));
      left = mergeSort(array.slice(indice));
    }
    const long = left.length;    
    for (let i = 0; i < long; i++) {
      let bandera = false;
      const l = left.shift();
      for (let j = 0; j < right.length; j++) {
        const r = right[j];
        if (r > l) {
          right.splice(j, 0, l);
          bandera = true
          break;
        }
      }
      if (!bandera) {
        right.push(l);
      }
    }
    return right
  } else {
    return array
  }

}

//console.log(mergeSort([10, -2, -7]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
