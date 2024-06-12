/* Imagina que estás desarrollando la lógica de precios de un E-commerce.
Declara variables para el nombre del producto (nombreProducto), el precio unitario (precioUnitario) y la cantidad deseada (cantidadDeseada). Para esta última utiliza prompt() tal como hicimos en el desafío anterior.
Ahora vamos a implementar un condicional para aplicar descuentos según la siguiente regla:
Si la cantidad comprada es mayor o igual a 5, aplica un descuento del 10%.
Para finalizar, calcula el costo total de la compra, aplicando el descuento según la condición y mostrar el total en un alert().

*/
let nombreProducto = "cuadernos cuadriculados"
const precioUnitario =  600
let cantidadDeseada = parseInt(prompt(`ingrese la cantidad de ${nombreProducto} que quiere comprar:`))
let costoTotal = precioUnitario * cantidadDeseada
let descuento = costoTotal/10
let costoTotalConDescuento= costoTotal-descuento

if(cantidadDeseada >= 5){
     alert(`usted tiene un descuento de 10% y si lo aplicamos solo tendria que pagar : ${costoTotalConDescuento}`)

}
else{
    alert(`usted tiene que pagar un total de $${costoTotal}`)
}
//recordar cuando uno quiere usar un promt(imprime) y tenemos que pedir un nuemero 
//poner detras del prompt 'parseint'(se usa para para que el numero escribido en letra ejemplo tres se convierta en un numero de digito)
// que daria asi parseint(prompt('ingre el nuemero de cantida que quiere comprar))