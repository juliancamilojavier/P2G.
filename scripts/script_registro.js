var datos = new Array();

function validarDatos(){
    var nombre_R = document.getElementById('nombres').value;
    var apellido_R = document.getElementById('apellidos').value;
    var t_documento_R = document.getElementById('tp_documento').value;
    var documento_R = document.getElementById('documento').value;
    var genero_R = document.getElementById('genero').value;
    var telefono_R = document.getElementById('telefono').value;
    var ciudad_R = document.getElementById('ciudad').value;
    var direccion_R = document.getElementById('direccion').value;
    var usuario_R = document.getElementById('usuario').value;
    var correo_R = document.getElementById('correo').value;
    var password_R = document.getElementById('password').value;
    var confirmar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nombre_R === "" && apellido_R === "" && t_documento_R === "tipo de documento" && documento_R === "" && genero_R === "genero" && telefono_R === "" && ciudad_R === "" && direccion_R === "" && usuario_R === "" && correo_R === "" && password_R === ""){
        alert("Todos los campos son obligatorios");
        return false
    }
    else if (nombre_R === ""){
        document.getElementById('nombres').focus();
        alert("Ingrese su Nombre");
        return false
    }
    else if (nombre_R.length>30){
        document.getElementById('nombres').focus();
        alert("Nombre muy largo");
        return false
    }
    else if (apellido_R === ""){
        document.getElementById('apellidos').focus();
        alert("Ingrese su Apellido");
        return false
    }
    else if (apellido_R.length>50){
        document.getElementById('apellidos').focus();
        alert("Apellido muy largo");
        return false
    }
    else if (t_documento_R === "tipo de documento"){
        document.getElementById('tp_documento').focus();
        alert("Escoge un tipo de documento");
        return false
    }
    else if (t_documento_R === "tarjeta de identidad"){
        document.getElementById('tp_documento').focus();
        alert("Debes ser mayor de edad");
        return false
    }
    else if (documento_R === ""){
        document.getElementById('documento').focus();
        alert("Escribe tu documento");
        return false
    }
    else if (isNaN(documento_R)){
        document.getElementById('documento').focus();
        alert("Documento no valido. \nDigite solo números");
        return false
    }
    else if (documento_R.length > 20){
        document.getElementById('documento').focus();
        alert("Número de documento muy largo");
        return false
    }
    else if (genero_R === "genero"){
        document.getElementById('genero').focus();
        alert("Seleccione su género");
        return false
    }
    else if (telefono_R === ""){
        document.getElementById('telefono').focus();
        alert("Ingrese su teléfono");
        return false
    }
    else if (isNaN(telefono_R)){
        document.getElementById('telefono').focus();
        alert("Teléfono no valido. \nDigite solo números");
        return false
    }
    else if (telefono_R.length > 20){
        document.getElementById('telefono').focus();
        alert("Número de teléfono muy largo");
        return false
    }
    else if (ciudad_R === ""){
        document.getElementById('ciudad').focus();
        alert("Ingrese su Ciudad");
        return false
    }
    else if (ciudad_R.length > 20){
        document.getElementById('ciudad').focus();
        alert("Nombre de ciudad muy largo");
        return false
    }
    else if (direccion_R === ""){
        document.getElementById('direccion').focus();
        alert("Ingrese su dirección");
        return false
    }
    else if (direccion_R.length > 40){
        document.getElementById('direccion').focus();
        alert("Dirección muy larga");
        return false
    }
    else if (usuario_R === ""){
        document.getElementById('usuario').focus();
        alert("Ingrese su Usuario");
        return false
    }
    else if (usuario_R.length>20){
        document.getElementById('usuario').focus();
        alert("Usuario muy largo");
        return false
    }
    else if (correo_R === ""){
        document.getElementById('correo').focus();
        alert("Ingrese su Correo");
        return false
    }
    else if (!confirmar.test(correo_R)){
        document.getElementById('correo').focus();
        alert("Correo no valido");
        return false
    }
    else if (correo_R.length>50){
        document.getElementById('correo').focus();
        alert("Correo muy largo");
        return false
    }
    else if (password_R === ""){
        document.getElementById('password').focus();
        alert("Ingrese su Contraseña");
        return false
    }
    else if (password_R.length<8 || password_R.length>20){
        document.getElementById('password').focus();
        alert("La Contraseña debe ser de minimo 8 y maximo 20 caracteres");
        return false
    }
    else{
        datos.push(usuario_R);
        datos.push(password_R)
        return datos;
    }
}


