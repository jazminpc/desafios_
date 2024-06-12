/*En este desafío, practicaremos el uso de arrays y bucles en JavaScript para gestionar productos en un e-commerce.

Vamos a empezar creando un array de Productos:

Para mostrar el contenido del array vamos a utilizar un “bucle for” para recorrer el mismo e imprimir en la consola cada uno de los productos.

Ahora vamos a actualizar el stock:

Utilizaremos otro “bucle for” para simular la venta de productos. Reduce el stock de productos eliminando el último con el método “pop” e imprime en la consola el nuevo stock después de la venta.

alt+z la lineas se acomodan 
*/

let Productos = ['lapicera','cinta de papel','cuaderno cuadriculado', 'lapices de colores x12', 'goma de borra']

for(let i = 0; i< Productos.length; i++) {
    console.log(`Productos ${i+1}:${Productos[i]}`);
}
Productos.pop();

console.log("\n-----------------------------------------------------")
    
console.log("nuevo stock:")

for(let  i= 0; i< Productos.length; i++) {
    console.log(`Producto ${i+1} : ${Productos[i]}`)
}