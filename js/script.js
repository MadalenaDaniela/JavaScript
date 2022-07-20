


alert("Bienvenido al centro de préstamos del Banco JavaScript");

let nombre = prompt("Por favor ingrese su nombre:");

let cuenta = prompt(nombre + " es usted cliente de nuestro banco?\n1. Si, lo soy\n2. No, no lo soy");

/* Array con objetos dentro: */

const tarjetaCredito = [{ plan: 'Básico', limiteExtraccion: 20000, limiteCompra: 100000, limiteCuotas: 90000, descripcion: 'Plan básico, sencillo y cómodo, cuenta con un límite para compras en cuotas y en un solo pago reducido para el uso conservado.' }, { plan: 'Platino', limiteExtraccion: 40000, limiteCompra: 280000, limiteCuotas: 260000, descripcion: 'Plan aumentado, un plan con un límite superior para compras tanto en cuotas como en un pago.' }, { plan: 'Dorado', limiteExtraccion: 80000, limiteCompra: 400000, limiteCuotas: 390000, descripcion: 'Plan pre full, un plan con un límite extendido y holgado para la comodidad del usuario.' }, { plan: 'Black', limiteExtraccion: 150000, limiteCompra: 1200000, limiteCuotas: 1000000, descripcion: 'El plan black es un plan full premium que cuenta con un límite de más de un millón de pesos para compras en un pago o en cuotas' }];

function porcentajePrestamo(numeroA, interes) {

    let resultado = (numeroA * interes) / 100 + numeroA;

    return resultado;
}

let tasaInteres, mensaje;

let inicioSesion = false;

/* Clase con un metodo creado: */
class Usuario {
    constructor(usuario, contrasenia) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }

    ingresoCorrecto() {
        alert("Bienvenida/o " + nombre);
    }
}

const usuario1 = new Usuario('usuario01', 'entrar01');

if (cuenta == 1) {

    tasaInteres = 8;

    mensaje = "Por ser cliente de nuestro banco la tasa de interés por su prestamos es solo del 8%\n\nPor favor, elija entre los valores que podemos ofrecerle:\n1. $20000\n2. $50000\n3. $80000\n4. $100000";

    alert('Por favor ingrese a continuación su nombre de usuario y contraseña:');

    for (let i = 2; i >= 0; i--) {

        let confirmarUsuario = prompt('Ingrese su usuario:');
        let confirmarContrasenia = prompt('Ingrese su contraseña:');

        if (confirmarUsuario == usuario1.usuario && confirmarContrasenia == usuario1.contrasenia) {
            
            usuario1.ingresoCorrecto();

            inicioSesion = true;

            break;

        } else {

            alert("Lo siento, la contraseña es incorrecta, te quedan " + i + ' intentos');
        }
    }

} else {

    tasaInteres = 10;

    mensaje = "La tasa de interés para no-clientes es del 10%\n\nPor favor, elija entre los valores que podemos ofrecerle:\n1. $20000\n2. $50000\n3. $80000\n4. $100000";
}

let edad

if (cuenta == 2) {

    edad = parseInt(prompt("Indique su edad:"));

    while (edad < 18) {

        alert('Lo siento, debes ser mayor de edad para acceder a nuestros prestamos. Gracias.');

        break;
    }
}

let clienteNuevo = false;

if (cuenta == 2 && edad >= 18) {

    let ingreso = prompt('Los beneficios para clientes son mayores. Los clientes cuentan solo con un 8% de interés en sus préstamos bancarios, a diferencia de los No-clientes quienes deben pagar el 10% de interés. Le gustaría ser parte de Banco JavaScript y así acceder a este beneficio?\n1. Si, me interesa\n2. No, seguir como No-cliente');

    if (ingreso == 1) {

        alert(nombre + ' para poder formar parte de Banco JavaScript le pediremos crear un usuario con nosotros:');

        let clienteUsuario = prompt('Ingrese sus nombres y apellidos completos por favor:');
        let telefonoCliente = parseInt(prompt('Indique un teléfono de contacto:'));
        let identificacionUsuario = prompt('Ingrese un nombre de usuario:');
        let contraseniaUsuario = prompt('Ingrese una contraseña:');
        let repeticionContraseña = prompt('Repita la contraseña:');

        if (contraseniaUsuario != repeticionContraseña) {

            alert('Lo siento las contraseñas no coinciden');

            clienteNuevo = true;

        } else {

            const usuario = {

                cliente: clienteUsuario,
                telefono: telefonoCliente,
                identificacion: identificacionUsuario,
                contrasenia: contraseniaUsuario,
            }

            alert(usuario.cliente + ' ' + 'su usuario fue creado con éxito, a continuación le mostraremos los planes desponibles para obtener nuestra tarjeta JavaScript:');


            for (const tarjeta of tarjetaCredito) {

                alert(tarjeta.plan + '\nLímite de extracción por cajero automático: $' + tarjeta.limiteExtraccion + '\nLímite para compra en un pago: $' + tarjeta.limiteCompra + '\nLímite para compra en cuotas: $' + tarjeta.limiteCuotas + '\n' + tarjeta.descripcion);
            }

            let nuevoCliente = prompt('Por favor indique en cual de nuestros planes está interesado:\n1. Básico \n2. Platino \n3. Dorado \n4. Black');

            if (nuevoCliente == 1 || nuevoCliente == 2 || nuevoCliente == 3 || nuevoCliente == 4) {

                alert('Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al teléfono ingresado anteriormente para continuar la operación. En el mismo llamado podrá gestionar el préstamo al 8% de interés una vez dado de alta como cliente. Saludos. ');

                clienteNuevo = true;

            } else {

                alert('Lo siento, el número ingresado no es correcto');

                clienteNuevo = true;
            }

        }
    } else {

        alert('Gracias, continue en la ventana No Clientes.');
    }
}


if (inicioSesion || (cuenta == 2 && edad >= 18 && clienteNuevo == false)) {

    let prestamoCliente = prompt(mensaje);

    switch (prestamoCliente) {

        case "1":

            alert("Su total a pagar será de $" + porcentajePrestamo(20000, tasaInteres));

            break;

        case "2":

            alert("Su total a pagar será de $" + porcentajePrestamo(50000, tasaInteres));

            break;

        case "3":

            alert("Su total a pagar será de $" + porcentajePrestamo(80000, tasaInteres));

            break;

        case "4":

            alert("Su total a pagar será de $" + porcentajePrestamo(100000, tasaInteres));

            break;

        default:

            alert("Lo siento el número ingresado no es corresto");

            break;
    }

    /* Métodos de busqueda y filtrado sobre Array: */

    const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

    let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

    if (cuotas <= 18) {

        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

        alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

    } else {

        alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
    }
}