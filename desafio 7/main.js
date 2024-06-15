/* desafio 8
Declarar un array con nombres de productos y recorrerlo. 

Por cada producto, crear una etiqueta <h2> que contenga el nombre, y agregarla al body.

Se recomienda recorrer el array con for of. 

En cada repetición se crea un elemento con createElement, se modifica su innerHTML, y se lo agrega con appendChild.*/ 


const Productos = ["cinta de papel","caderno","goma","lapicera","lapices de colores x12"]
for(producto of Productos){

    let h2 = document.createElement("h2")
    h2.innerHTML=`nombre:<span style="color: skyblue;">${producto}</span>`
    document.body.appendChild(h2)
    


}

  


