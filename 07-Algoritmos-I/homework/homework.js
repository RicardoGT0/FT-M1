'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const primos=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  
  const factores=[1]
  let i=0;
  do {
    const factor=primos[i];
    if(num%factor===0){
      num=num/factor;
      factores.push(factor);
      i=0;
    }else{
      i++;
    }
  } while (num>1);
  
  return factores;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  let i = 0
  let contador= 1
  do {    
    if (array[i]>array[i+1]){
      let temp=array[i];
      array[i]=array[i+1];
      array[i+1]=temp;
    }
    if (i == array.length-1){ 
      i=0;
      contador++;
    }
    else{
      i++;
    }
  }while(contador<=array.length);
  return array
}

/* console.log(bubbleSort([5, 1, 4, 2, 8]));
console.log(bubbleSort([10, 10, 16, 12]));
console.log(bubbleSort([10, -2, -7, 4]));
*/

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const longitud=array.length;
  for (let i = 1; i < longitud; i++) {
    const element = array[i];
    array.splice(i,1);
    array
    for (let j = i-1; j >= 0; j--) {
      if (element<=array[j]){
        if(element>=array[j-1] || j===0){
          array.splice(j,0,element); 
          break; 
        }       
      }else if(element>array[j] || j===0){
        array.splice(i,0,element);
        break;
      }      
    }    
  }
  return array;  
}

//console.log(insertionSort([5, 1, 4, 2, 8]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:


  
  for (let i = 0; i < array.length-1; i++) {
    let puntero;
    let min=array[i]
    for (let j = i+1; j < array.length; j++) {      
      if (array[j]<min){
        min=array[j];
        puntero=j;
      }
      if(j===array.length-1 && puntero!=undefined){
        let temp=array[i];
        array[i]=array[puntero];
        array[puntero]=temp;
      }
    }    
  }  
  return array;  
}
//console.log(selectionSort([5, 1, 4, 2, 8]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
