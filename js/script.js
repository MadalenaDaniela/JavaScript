
alert("Bienvenido al centro de prestamos del Banco JavaScript");
let contraseña = "entrar01";

let nombre = prompt("Por favor ingrese su nombre:");

let edad = parseInt(prompt("Indique su edad:"));

while (edad < 18) {
    alert(
        "Lo siento, debes ser mayor de edad para acceder a un préstamo bancario en nuestra entidad."
    );
    edad = parseInt(prompt("Indique su edad:"));
}

let cuenta = prompt(nombre + " es usted cliente de nuestro banco?\n1. Si, lo soy\n2. No, no lo soy");

function porcentajeCliente(numeroA) {
    let resultado = (numeroA * 8) / 100 + numeroA;
    return resultado;
}

function porcentajeNoCliente(numeroA) {
    let resultado = (numeroA * 10) / 100 + numeroA;
    return resultado;
}

if (cuenta == 1) {
    for (let i = 2; i >= 0; i--) {
        entrar = prompt("Por favor ingrese su contraseña");
        if (contraseña == entrar) {
            alert("Bienvenida/o " + nombre);

            let prestamoCliente = prompt(
                "Por ser cliente de nuestro banco la tasa de interés por su prestamos es solo del 8%\n\nPor favor, elija entre los valores que podemos ofrecerle:\n1. $20000\n2. $50000\n3. $80000\n4. $100000");
            switch (prestamoCliente) {
                case "1":
                    alert("Su total a pagar será de $" + porcentajeCliente(20000));
                    break;

                case "2":
                    alert("Su total a pagar será de $" + porcentajeCliente(50000));
                    break;

                case "3":
                    alert("Su total a pagar será de $" + porcentajeCliente(80000));
                    break;

                case "4":
                    alert("Su total a pagar será de $" + porcentajeCliente(100000));
                    break;

                default:
                    alert("Lo siento el número ingresado no es corresto");
                    break;
            }

            break;
        } else {
            alert("Lo siento, la contraseña es incorrecta, te quedan " + i + ' intentos');
        }
    }
} else if (cuenta == 2) {
    let prestamoNoCliente = prompt(
        "La tasa de interés para no-clientes es del 10%\n\nPor favor, elija entre los valores que podemos ofrecerle:\n1. $20000\n2. $50000\n3. $80000\n4. $100000"
    );
    switch (prestamoNoCliente) {
        case "1":
            alert("Su total a pagar será de $" + porcentajeNoCliente(20000));
            break;

        case "2":
            alert("Su total a pagar será de $" + porcentajeNoCliente(50000));
            break;

        case "3":
            alert("Su total a pagar será de $" + porcentajeNoCliente(80000));
            break;

        case "4":
            alert("Su total a pagar será de $" + porcentajeNoCliente(100000));
            break;
    }
} else {
    alert("Lo siento, el numero ingresado no es correcto");
}
