# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

<!-- 
Con la palabra clave var. Por ejemplo, var x = 42. Esta sintaxis se puede utilizar para declarar variables locales y globales, dependiendo del contexto de ejecución.

Con la palabra clave const o let. Por ejemplo, let y = 13. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque. (Ve el Ámbito de variables abajo.) 

También puedes simplemente asignar un valor a una variable. Por ejemplo, x = 42. Este formulario crea una variable global no declarada. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.
-->

comentar lo que ocurre, linea por linea


```javascript
x = 1;      //se inicializa la "variable global no declarada" x
var a = 5;  //se declara y inicializa a
var b = 10; //se declara y inicializa b
var c = function (a, b, c) {  // se declara la funcion c
   var x = 10; //se declara y inicializa variable local x
   console.log(x);   //se muestra en consola x (la variable local)
   console.log(a);   //se muestra en consola a (la variable local, ingresada por parametro)
   var f = function (a, b, c) {  // se declara la funcion f
      b = a;   //se cambia el valor de b (local) por el de a (local)
      console.log(b);   //se muestra en consola b (la variable local)
      b = c;   //se cambia el valor de b (local) por el de c (local)
      var x = 5;  //se declara y inicializa variable local x
   };
   f(a, b, c); //se llama a la fucion f con enviando como parametros a,b,c (variables locales)
   console.log(b);   //se muestra en consola b (la variable local)
};
c(8, 9, 10);     //se llama a la fucion c con enviando como parametros valores numericos
console.log(b);   //se muestra en consola b (la variable global)
console.log(x);   //se muestra en consola x (la variable global)
```

```javascript
console.log(bar); //se muestra en consola bar === undefined
console.log(baz); //manda error de que la variable no ha sido declarada
foo();   //se llama a la funcion foo
function foo() {  //se declara la funcion foo
   console.log('Hola!');   ////se muestra en consola el mensaje "Hola!"
}
var bar = 1;   // se declara e inicializa la variable bar
baz = 2;       //se inicializa la "variable global no declarada" baz
```

```javascript
var instructor = 'Tony';   // se declara e inicializa la variable global instructor
if (true) {    //IF condicionado a ejecutar siempre la siguiente linea
   var instructor = 'Franco'; // se declara e inicializa la variable instructor modificando el valor de la variable global
}
console.log(instructor);   //se muestra en consola la variable global instructor
```

```javascript
var instructor = 'Tony';   
console.log(instructor);   //Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);   //franco
   }
})();
console.log(instructor);   //Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //the flash
   console.log(pm);  //reverse Flash
}
console.log(instructor);   // The Flash
console.log(pm);     //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        //2
"2" * "3"      //6
4 + 5 + "px"   //"45px"
"$" + 4 + 5    //"$45"
"4" - 2        //2
"4px" - 2      // (NaN)
7 / 0          //(Infinity)
{}[0]          //(undefined)
parseInt("09") //9
5 && 2         //(2)
2 && 5         //5
5 || 0         //5
0 || 5         //0
[3]+[3]-[10]   //(23)
3>2>0          //false
[] == ![]      //(True)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);      //undefined  --- por que se sabe que esta definida, pero no se ejecuta el contenido, sino hasta que es llamada en la linea 124
   console.log(foo());  //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {                // considerando que food esta recibiendo false como parametro
      var snack = 'Friskies'; //estas lineas no se ejecutan
      return snack;
   }
   return snack;
}

getFood(false);   // por lo que el valor obtenido es undefined, por que la declaracion asciende 
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());   //'Aurelio De Rosa'

var test = obj.prop.getFullname;    

console.log(test());    // undefined --- por que test no tiene la propiedad fullname
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();

//1
//4
//3
//2
//el orden se ve alterado por el retraso del setTimeout
//
```
