'use strict';
//no usar parseInt ni toString


function BinarioADecimal(string) {
   let decimal=0;
   for(let i=0; i<string.length; i++){
      const char = string[string.length-i-1];
      if(char=='1'){
         decimal+=2**i;
      }      
   }
   return decimal;
}



function DecimalABinario(num) {
   
   const resultado=[];
   do{
      resultado.unshift(num%2);
      num=num/2>>0;

   }while(num>=1);

   let binario="";
   resultado.forEach(element => {
      binario+=element;
   });

   return binario;
}





module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
