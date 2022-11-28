'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:

  - add: agrega un nuevo nodo al final de la lista;
  
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista 
    vacía);
  
  - search: recibe un parámetro y lo busca dentro de la lista, con una
   particularidad: el parámetro puede ser un valor o un callback. En el primer 
   caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, 
   buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne
   true. 

  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por 
  parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.

*/

class Node {
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class LinkedList {
  constructor(){
    this.head= null;
    this.final= null;
    this.size=0;
  }
  
  add(string){
    if (this.size===0){
      this.head=new Node(string);
      this.final=this.head;
      this.size++;
    }else{
      this.final.next=new Node(string);
      this.final=this.final.next;
      this.size++;
    }    
  }

  remove(){
    if (this.size>2){
      let n=this.head;
      for (let i = 1; i < this.size; i++) {
        n=n.next;
      }
      const v=n.next.value;
      n.next=null;
      this.final=n;
      this.size--;
      return v;
    }
    if (this.size===2){
      const v=this.final.value;
      this.head.next=null
      this.final=this.head;
      this.size--;
      return v;
    }
    if (this.size===1){
      const v=this.head.value;
      this.head=null;
      this.final=null;
      this.size=0;
      return v;
    }
    return null;

  }

  search(entrada){
    let n=this.head; 
    

    for (let i = 1; i <= this.size; i++){
      if(typeof entrada==="function"){
        if(entrada(n.value)){
          return n.value
        }
      }else if (typeof n.value=== 'object'){
        const valores =Object.values(n.value);
        for(let i=0;i<valores.length;i++){
          if (valores[i] === entrada){
            return n.value
          }
        }
      }else{  
        if(n.value===entrada){
          return n.value;
        } 
      }
      n=n.next
    }
    return null;
  }
}

/* habilitar para prueba rapida

function UserNode(name, email, city) {
  this.name = name;
  this.email = email;
  this.city = city;
}
 const linkedList=new LinkedList()
linkedList.add('Nimit');
linkedList.add('one');
linkedList.add('two');
linkedList.add(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
linkedList.add(new UserNode('David', 'david@fs.com', 'New York'));
linkedList.add(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));

//console.log(linkedList.search(function(nodeValue) {return nodeValue === 'one';}));



//console.log(linkedList.search('David'))
console.log(linkedList.search(function (userNode) {
  return userNode.name === 'David';
}).email);
 */





/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets
 (slots, contenedores, o casilleros; es decir, posiciones posibles 
  para almacenar la información), donde guardaremos datos en formato 
  clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets 
  por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato.
   Recibe un input alfabético, suma el código numérico de cada caracter del input
    (investigar el método charCodeAt de los strings) y calcula el módulo de ese
    número total por la cantidad de buckets; de esta manera determina la posición 
    de la tabla en la que se almacenará el dato.
  
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la
   clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.

  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el
   bucket correcto de la tabla.

  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en
   la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero
 puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
  luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un 
  bucket específico (determinado al hashear la clave)
*/
class HashTable {
  constructor(){
    this.buckets=Array(35);
    this.numBuckets=this.buckets.length;
    for (let i = 0; i < 35; i++) {
      this.buckets[i]={};
    }
  }

  hash(string){
    /* suma el código numérico de cada caracter del input
    (investigar el método charCodeAt de los strings) y 
    calcula el módulo de ese número total por la cantidad de buckets;
    de esta manera determina la posición de la tabla en la que se almacenará el dato. */
    let codigo=0;
    for (let i = 0; i < string.length; i++) {
      const element = string[i];
      codigo += element.charCodeAt()
      codigo= codigo%35
      console.log(codigo) 
    }
    return codigo;
  }

  set(clave, valor)  {
    /*     set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la
   clave invocando al método hash, y almacena todo el conjunto en el bucket correcto. */
    if (typeof clave === "string"){
      const codigo=this.hash(clave)    
      this.buckets[codigo][clave]=valor;
    }else{
      throw TypeError('Keys must be strings');
    }
    
  }

  get(clave){
    /* get: recibe una clave por parámetro, y busca el valor que le corresponde en el
   bucket correcto de la tabla. */
    const codigo=this.hash(clave);
    const bucket= this.buckets[codigo];
    const valor= bucket[clave];
    return valor;
  }

  hasKey(clave){
    /* hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en
   la tabla con esa clave (retorna un booleano). */
    const codigo=this.hash(clave);
    const bucket= this.buckets[codigo];
    return bucket[clave]===undefined?false:true;
  }
}
/* pruebas rapidas

const h= new HashTable();
console.log(h.hash('foobar'));
console.log(h.hash('raboof'));
h.set('foobar','2')
console.log(h.get('foobar'))
console.log(h.hasKey('foobar'))
console.log(h.hasKey('raboof')) */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
