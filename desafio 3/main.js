/*Crea una función llamada sumarProductos() que acepte dos parámetros: precioUnitario y cantidadDeseada.

La función debe calcular y devolver mediante un console.log 
el total gastado en un producto multiplicando el precio por la cantidad comprada.*/

function  sumarProductos(precioUnitario,cantidadDeseada){
    let total_gastado = precioUnitario*cantidadDeseada;
    return total_gastado
   //return precioUnitario*cantidadDeseada
   //retorna =return
   //console.log(sumarProductos(total_gastado))
   // funcion flecha = const sumarProductos = () =>{let total_gastado = precioUnitario*cantidadDeseada}
}
let precio = 500;
let cantidad =7; 
//prompt('Que cantidad de productos desea: ');
//prompt pregunta al usuario 
let total_apagar = sumarProductos(precio,cantidad);
console.log('el total que tiene que pagar en el precio del producto es de $ ' + total_apagar);
//alert('el total que tiene que pagar en el precio del producto es de $ ' + total_apagar);
