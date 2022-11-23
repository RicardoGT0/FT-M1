var snack = 'Meow Mix';

function getFood(food) {
   if (food) {                // considerando que food esta recibiendo false como parametro
      var snack = 'Friskies'; //estas lineas no se ejecutan
      return snack;
   }
   return snack;
}

getFood(false);  