var usuario_I, password_I;

function validarIngreso(){
    usuario_I = document.getElementById('usuario').value;
    password_I = document.getElementById('password').value;

    if (usuario_I === "" && password_I === ""){
        document.getElementById("error").innerHTML = `<b>*Todos los campos son obligatorios</b>`;
    }
    else if (usuario_I === ""){
        document.getElementById('usuario').focus();
        document.getElementById("error").innerHTML = `<b>*Ingrese su Usuario</b>`;
        return false;
    }
    else if (usuario_I.length>20){
        document.getElementById('usuario').focus();
        document.getElementById("error").innerHTML = `<b>Usuario muy largo</b>`;
        return false;
    }
    else if (password_I === ""){
        document.getElementById('password').focus();
        document.getElementById("error").innerHTML = `<b>*Ingrese su Contraseña</b>`;
        return false;
    }
    else if (password_I.length<8 || password_I.length>20){
        document.getElementById('password').focus();
        document.getElementById("error").innerHTML = `<b>*La Contraseña debe ser de minimo 8 y maximo 20 caracteres</b>`;
        return false;
    }
    else if (usuario_I !== datos[0] || password_I !== datos[1]){
        document.getElementById('usuario').focus();
        document.getElementById("error").innerHTML = `<b>*Error de ingreso. Varifica el usuario y contraseña</b>`;
        return false;
    }else{
        alert("Felicidades ingresaste");
    }
}