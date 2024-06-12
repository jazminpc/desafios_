/* Creá 3 variables:

Una para asignar el nombre del producto (nombreProducto)

Una para el precio por unidad (precioUnitario) con sus respectivos valores 

Y otra que almacenará la cantidad deseada por el usuario (cantidadDeseada) 

Creá un prompt donde se le pregunte al usuario la cantidad que desea comprar y que esa respuesta se almacene en cantidadDeseada.

Luego calcular el costo total de la compra multiplicando el precioUnitario por la cantidadDeseada

Utilizá alert() para informar al usuario sobre el costo total de su compra.*/

let cantidad_desea = parseInt (prompt("inserte la cantidad de lapiceras que quiere comprar :) :"));

let nombre_de_poducto ="lapicera"
const precio_unitario = 150
let cantidad_deseada = cantidad_desea


let multiplicando = precio_unitario * cantidad_deseada;
alert("El precio en total seria:" + multiplicando)



/*
let nombre_de_poducto ="lapiceras"
const precio_unitario = 150
let cantidad_deseada = prompt(`inserte la cantidad de ${nombre_de_poducto} que quiere comprar :) `);
parseInt(cantidad_deseada)

let total = precio_unitario * cantidad_deseada;
alert(`Usted Compro ${cantidad_deseada} ${nombre_de_poducto} .El precio total es de $${total}`)
*/