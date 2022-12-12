'use strict';

/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
- size: retorna la cantidad total de nodos del árbol
- insert: agrega un nodo en el lugar correspondiente
- contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera
de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order").
Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro
del directorio homework.
*/

class BinarySearchTree{
   constructor(valor){
      this.value=valor;
      this.left=null;
      this.right=null;
   }


/* class BinarySearchTree {
   constructor(valor){
      this.raiz=new Nodo(valor)
   } */
   
   buscarVacio(valor, actual){
      let bandera=false;
      if (valor> actual.value){ // si algo sale mal, cambiar a <=
         if (actual.right != null){
            actual=actual.right
            bandera=this.buscarVacio(valor,actual);
         }else{
            actual.right= new BinarySearchTree(valor)
            bandera=true;
         }
      }else{
         if (actual.left != null){
            actual=actual.left
            bandera=this.buscarVacio(valor,actual);            
         }else{
            actual.left=new BinarySearchTree(valor)
            bandera=true;
         }
      }   
      return bandera;
   }
   
   insert(valor){
      /* insert: agrega un nodo en el lugar correspondiente */
      return this.buscarVacio(valor,this)
   }
   
   buscarvalor(valor, actual){
      let bandera=false;
      if (valor===actual.value){ 
         bandera=true
      }
      else{
         if (valor > actual.value){ // si algo sale mal, cambiar a <=
            if (actual.right != null){
               actual=actual.right
               bandera=this.buscarvalor(valor,actual);
            }
         }else{
            if (actual.left != null){
               actual=actual.left
               bandera=this.buscarvalor(valor,actual);            
            }
         }
      }
      return bandera;
   }
   contains(valor){
      /* contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol */
      return this.buscarvalor(valor, this);
   }
   
   contar(actual){
      //Post-order  LRV -> left rigth value
      let contador=1;      
      if(actual.left){     
         contador+=this.contar(actual.left);         
      }      
      if(actual.right){                 
         contador+=this.contar(actual.right);          
      }           
      return contador;
   }

   size(){
      /* size: retorna la cantidad total de nodos del árbol */
      return this.contar(this);
   }

   postOrder(actual){
      //Post-order  LRV -> left rigth value
      let valores=[];
      
      if(actual.left){     
         valores.push(...this.postOrder(actual.left));
         
      }      
      if(actual.right){                 
         valores.push(...this.postOrder(actual.right));         
         
      }     
      valores.push(actual.value);
      return valores;
   }
   
   preOrder(actual){
      //Pre-order   VLR -> value left rigth
      let valores=[];
      
      valores.push(actual.value);
      if(actual.left){     
         valores.unshift(...this.postOrder(actual.left));         
      } 
      if(actual.right){                 
         valores.unshift(...this.postOrder(actual.right));                  
      }     
      //[20, 15, 5, 0, 1]
      valores
      return valores;
   }
   
   inOrder(actual){
      //In-order    LVR -> left value rigth
      let valores=[];      
      
      console.log(actual.value)
      if (actual.left){
         if(actual.left){     
            valores.push(...this.postOrder(actual.left));
            
         } 
         //valores.push(actual.value);                  
      }else{
         /* if(actual.right){                 
            valores.push(...this.postOrder(actual.right));         
            
         }   */
      }
      
      console.log(valores)
      return valores;
   }
   
   depthFirstForEach(cb,order){
      /* depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera
      de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order").
      Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto. */
      if (!order || order === "in-order") {
         this.left && this.left.depthFirstForEach(cb, order);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb, order);
       } else if (order === "post-order") {
         // post order
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
         cb(this.value);
       } else {
         // Pre-order
         cb(this.value);
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
       }
   }
   
   breadthFirstForEach(cb, array_queue = []) {
      if (this.left) {
       array_queue.push(this.left)
      }
      if (this.right) {
       array_queue.push(this.right)
      }
      cb(this.value);
      if(array_queue.length>0){
       console.log("------> ", array_queue)
       array_queue.shift().breadthFirstForEach(cb,array_queue) // <-
      }
    }
   
   
}

const cb_test=function(valor){valor}
const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
const arbol=new BinarySearchTree(20);
valuesToInsert.forEach(function(value){
   arbol.insert(value);
});

//console.log(arbol.contains(9))
//console.log(arbol)
//console.log(arbol.size());
//console.log(arbol.depthFirstForEach(cb_test, 'post-order'))
//                                                          [20, 15, 5, 0, 1], 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]
console.log(arbol.depthFirstForEach(cb_test, 'pre-order'))

console.log(arbol.depthFirstForEach(cb_test,'in-order'))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
