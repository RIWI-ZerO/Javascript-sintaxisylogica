// --- LABORATORIO DE SINTAXIS Y LÓGICA EN JAVASCRIPT ---

// 1. VARIABLES Y TIPOS DE DATOS
let nombre = prompt("Ingresa tu nombre:");
let edad = Number(prompt("Ingresa tu edad:"));
let correo = prompt("Ingresa tu correo electrónico:");
const estaActivo = true; 

// Muestra toda la información en consola
console.log("Datos del usuario:", nombre, edad, correo, estaActivo);

// Muestra el tipo de dato de cada variable
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof correo);
console.log(typeof estaActivo);


// 2. OPERADORES Y CONDICIONALES
if (edad >= 18 && estaActivo === true) {
    alert("El usuario es mayor de edad y su cuenta está activa.");
} else {
    alert("El usuario no cumple con los requisitos mínimos.");
}

// 3. CICLOS (Sistema de contraseñas)
const contrasenaCorrecta = "1234";
let accesoConcedido = false;

for (let i = 1; i <= 3; i++) {
    let passwordIngresada = prompt("Intento " + i + ": Ingresa la contraseña");
    if (passwordIngresada === contrasenaCorrecta) {
        alert("¡Contraseña correcta! Acceso permitido.");
        accesoConcedido = true;
        break; 
    } else {
        alert("Contraseña incorrecta.");
    }
}

if (accesoConcedido === false) {
    alert("Has agotado tus 3 intentos. Acceso bloqueado.");
}

// 4. FUNCIONES
function validarEdad(edadUsuario) {
    return edadUsuario >= 18;
}

function validarAcceso(edadUsuario, estadoUsuario) {
    if (validarEdad(edadUsuario) && estadoUsuario === true) {
        return true;
    }
    return false;
}

function mostrarResultado(nombreUsuario, tienePermiso) {
    if (tienePermiso) {
        alert("Bienvenido al sistema, " + nombreUsuario);
    } else {
        alert("Lo sentimos " + nombreUsuario + ", no tienes permisos.");
    }
}

// Llamada final para cumplir el punto 4
let tienePermiso = validarAcceso(edad, estaActivo);
mostrarResultado(nombre, tienePermiso);