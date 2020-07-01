var archivos, contenedor, titulo, precio, producto, uso, estado, imgTag;

function crearImg() {
    archivos = document.getElementById("imagenes").files;
    for (i = 0; i < archivos.length; i++) {
      imgTag = document.createElement("img");
      imgTag.height = 400;
      imgTag.width = 400; 
      imgTag.id = i;
      imgTag.src = URL.createObjectURL(archivos[i]);
      console.log(imgTag)
    }
    console.log(archivos)
}

function verCompra(){
    console.log(archivos);
    contenedor = document.getElementById("mostrar_i");
    for (i = 0; i < archivos.length; i++){
        contenedor.appendChild(imgTag);
    }
    titulo = document.getElementById("nombre_p").value;
    precio = document.getElementById("precio").value;
    contenedor.appendChild(imgTag);
    document.getElementById("tit").innerHTML = titulo;
    document.getElementById("pre").innerHTML = `Precio: $`+precio;
}

function validarCompra(){
    titulo = document.getElementById("nombre_p").value;
    precio = document.getElementById("precio").value;
    producto = document.getElementById("producto").value;
    uso = document.getElementById("uso").value;
    estado = document.getElementById("estado_p").value;
    if (titulo === "" && precio === "" && producto === "" && uso === "" && estado === ""){
        alert("Todos los campos son obligatorios")
    }
    else if (producto === "0"){
        document.getElementById("producto").focus();
        alert("Seleccione el tipo de producto a vender");
        return false;
    }
    else if (titulo === ""){
        document.getElementById("nombre_p").focus();
        alert("Escribe el nombre del producto");
        return false;
    }
    else if (uso === ""){
        document.getElementById("uso").focus();
        alert("Escribe el tiempo de uso del producto");
        return false;
    }
    else if (estado === "0"){
        document.getElementById("estado_p").focus();
        alert("Selecciona el estado de el producto");
        return false;
    }
    else if (precio === ""){
        document.getElementById("precio").focus();
        alert("Digite el precio del prodcuto");
        return false;
    }
    else if(isNaN(precio)){
        document.getElementById("precio").focus();
        alert("El precio debe ir en caracteres numericos");
        return false;
    }
}