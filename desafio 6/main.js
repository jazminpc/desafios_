let precioProducto= document.getElementById("precioProducto")

setTimeout(()  =>{
    precioProducto.innerText="precio:$450";
    let titulo= document.querySelector("#nombreProducto")
    titulo.style.color ="skyblue"
},5000)
