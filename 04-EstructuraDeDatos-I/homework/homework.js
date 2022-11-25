'use strict';

// EJERCICIO 1
function nFactorial(n) {
   let result=1;
   for (let i = 1; i <= n; i++) {
      result*=i; 
   }
   return result;
}

/* function nFactorial(n) {
   if (n<2){
      return 1;
   }else{
      return nFactorial(n-1)*n;
   }
}*/
//console.log(nFactorial(170)); //max 170 

// EJERCICIO 2
/* function nFibonacci(n) {
   const serie=[0,1];
   if(n===0 || n===1){
      return serie[n];
   }else{
      let result=0;
      for (let i = 2; i <= n; i++) {
         result = serie[0]+serie[1];
         serie[0]=serie[1];
         serie[1]=result;
      }
      return result;
   }   
} */

function fibonacci(n){
   let serie=[1,0];
   if(n===0 || n===1){
      return [n-1];
   }
   if (n==2){
      return serie;
   }
   if(n>2){
      serie=fibonacci(n-1);
      serie.unshift(serie[0]+serie[1]); 
      return serie;
   }
}
function nFibonacci(n){
   const f=fibonacci(n+1)
   console.log(f)
   return f[0]
}

//console.log(nFibonacci(9)) //numero mas alto


// EJERCICIO 3
function Queue() {
   this.data=[];
}
Queue.prototype.enqueue=function(info){
   this.data.push(info);
}
Queue.prototype.dequeue=function(){
   return this.data.shift();
}
Queue.prototype.size=function(){
   return this.data.length
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
