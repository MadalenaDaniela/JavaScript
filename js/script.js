


cliente = document.getElementById('btnSi');
noCliente = document.getElementById('btnNo');
quieroCliente = document.getElementById('btnQuiero');

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

cliente.onclick = () => {

    alert('Por favor ingrese a continuación su nombre de usuario y contraseña:');

    for (let i = 2; i >= 0; i--) {

        let confirmarUsuario = prompt('Ingrese su usuario:');
        let confirmarContrasenia = prompt('Ingrese su contraseña:');

        if (confirmarUsuario == usuario1.usuario && confirmarContrasenia == usuario1.contrasenia) {

            let section = document.getElementById('section1');
            section.remove();

            let img = document.getElementById('img');
            img.remove();

            let seccion = document.getElementById(`contenedor`);

            cliente = document.createElement('div');
            cliente.className = 'titulo subtitulo';
            cliente.innerHTML = `<div id="section2"><h3  class="titulo subtitulo">Por ser cliente de nuestro banco la tasa de interés por su prestamos es solo del 8%. Por favor, elija entre los valores que podemos ofrecerle:</h3>
            </div>`;

            seccion.append(cliente);

            cantidad = document.createElement('div');
            cantidad.className = 'titulo subtitulo';
            cantidad.innerHTML = `<div id="botones">
            <button id="20" type="submit" class="btn btn-primary">$20000</button>
            <button id="50" type="submit" class="btn btn-primary">$50000</button>
            <button id="80" type="submit" class="btn btn-primary">$80000</button>
            <button id="100" type="submit" class="btn btn-primary">$100000</button>
            </div>`;

            seccion.append(cantidad);

            let uno = document.getElementById('20');

            uno.onclick = () => {

                let limpiar = document.getElementById('botones');
                limpiar.remove();
                let limpiar1 = document.getElementById('section2');
                limpiar1.remove();

                let tasaInteres = 8;

                function porcentajePrestamo(numeroA, interes) {

                    let resultado = (numeroA * interes) / 100 + numeroA;

                    return resultado;
                }

                let resultado = porcentajePrestamo(20000, tasaInteres);

                let contenedor = document.getElementById('contenedor');

                let titulo = document.createElement('h3');
                titulo.className = 'titulo subtitulo';
                titulo.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>`

                contenedor.append(titulo);

                let cuotas = document.createElement('div');
                cuotas.className = 'titulo subtitulo';
                cuotas.innerHTML = `<div id="botones">
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
                </div>`;

                contenedor.append(cuotas);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                    let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                    if (cuotas <= 18) {

                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                        alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                    } else {

                        alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                    }
                }
            }

            let dos = document.getElementById('50');

            dos.onclick = () => {

                let limpiar = document.getElementById('botones');
                limpiar.remove();
                let limpiar1 = document.getElementById('section2');
                limpiar1.remove();

                let tasaInteres = 8;

                function porcentajePrestamo(numeroA, interes) {

                    let resultado = (numeroA * interes) / 100 + numeroA;

                    return resultado;
                }

                let resultado = porcentajePrestamo(50000, tasaInteres);

                let contenedor = document.getElementById('contenedor');

                let titulo = document.createElement('h3');
                titulo.className = 'titulo subtitulo';
                titulo.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>`

                contenedor.append(titulo);

                let cuotas = document.createElement('div');
                cuotas.className = 'titulo subtitulo';
                cuotas.innerHTML = `<div id="botones">
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
                </div>`;

                contenedor.append(cuotas);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                    let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                    if (cuotas <= 18) {

                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                        alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                    } else {

                        alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                    }
                }
            }

            let tres = document.getElementById('80');

            tres.onclick = () => {

                let limpiar = document.getElementById('botones');
                limpiar.remove();
                let limpiar1 = document.getElementById('section2');
                limpiar1.remove();

                let tasaInteres = 8;

                function porcentajePrestamo(numeroA, interes) {

                    let resultado = (numeroA * interes) / 100 + numeroA;

                    return resultado;
                }

                let resultado = porcentajePrestamo(80000, tasaInteres);

                let contenedor = document.getElementById('contenedor');

                let titulo = document.createElement('h3');
                titulo.className = 'titulo subtitulo';
                titulo.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>`

                contenedor.append(titulo);

                let cuotas = document.createElement('div');
                cuotas.className = 'titulo subtitulo';
                cuotas.innerHTML = `<div id="botones">
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
                </div>`;

                contenedor.append(cuotas);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                    let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                    if (cuotas <= 18) {

                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                        alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                    } else {

                        alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                    }
                }
            }

            let cuatro = document.getElementById('100');

            cuatro.onclick = () => {

                let limpiar = document.getElementById('botones');
                limpiar.remove();
                let limpiar1 = document.getElementById('section2');
                limpiar1.remove();

                let tasaInteres = 8;

                function porcentajePrestamo(numeroA, interes) {

                    let resultado = (numeroA * interes) / 100 + numeroA;

                    return resultado;
                }

                let resultado = porcentajePrestamo(100000, tasaInteres);

                let contenedor = document.getElementById('contenedor');

                let titulo = document.createElement('h3');
                titulo.className = 'titulo subtitulo';
                titulo.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>`

                contenedor.append(titulo);


                let cuotas = document.createElement('div');
                cuotas.className = 'titulo subtitulo';
                cuotas.innerHTML = `<div id="botones">
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
                </div>`;

                contenedor.append(cuotas);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                    let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                    if (cuotas <= 18) {

                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                        alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                    } else {

                        alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                    }
                }
            }

            break;

        } else {

            alert("Lo siento, la contraseña es incorrecta, te quedan " + i + ' intentos');
        }
    }
}

quieroCliente.onclick = () => {

    let section = document.getElementById('section1');
    section.remove();

    let img = document.getElementById('img');
    img.remove();

    let seccion = document.getElementById(`contenedor`);

    nuevoCliente = document.createElement('div');
    nuevoCliente.className = 'titulo subtitulo';
    nuevoCliente.innerHTML = `<div id="section2"><h3  class="titulo subtitulo">Por favor cree un usuario de ingreso:</h3>
        <form class="container" action="#" method="post">
          <div class="form">
          <label for="nombre">Ingrese su nombre y apellido:</label>
          <input id="usuario" type="text" class="form-control" placeholder="Nombre Apellido">
          <label for="telefono">Ingrese un teléfono de contacto:</label>
            <input id="telefono" type="number" class="form-control" placeholder="1112345678">
            <label for="nombreUsuario">Ingrese un nombre de usuario:</label>
            <input id="nombreUsuario" type="text" class="form-control" placeholder="juan01">
            <label for="contrasenia">Ingrese una contraseña:</label>
            <input id="contrasenia" type="password" class="form-control" placeholder="********">
            <div>
              <button id="ingreso" type="submit" class="btn btn-primary">Crear</button>
            </div>
          </div>
        </form>
        </div>`;

    seccion.append(nuevoCliente);

    ingreso = document.getElementById('ingreso');

    ingreso.onclick = (evento) => {
        let clienteUsuario = document.getElementById('usuario').value;
        let clienteTelefono = document.getElementById('telefono').value;
        let identificacionUsuario = document.getElementById('nombreUsuario').value;
        let contraseniaUsuario = document.getElementById('contrasenia').value;
        evento.preventDefault();

        const usuario = {

            cliente: clienteUsuario,
            telefono: clienteTelefono,
            identificacion: identificacionUsuario,
            contrasenia: contraseniaUsuario,
        }

        let seccion = document.getElementById(`contenedor`);


        alert(usuario.cliente + ' su usuario fue creado con éxito, a continuación le mostramos los planes que podemos ofrecerle:');
        let section2 = document.getElementById('section2');
        section2.remove();
        const tarjetaCredito = [{ plan: 'Básico', limiteExtraccion: 20000, limiteCompra: 100000, limiteCuotas: 90000, descripcion: 'Plan básico, sencillo y cómodo, cuenta con un límite para compras en cuotas y en un solo pago reducido para el uso conservado.' }, { plan: 'Platino', limiteExtraccion: 40000, limiteCompra: 280000, limiteCuotas: 260000, descripcion: 'Plan aumentado, un plan con un límite superior para compras tanto en cuotas como en un pago.' }, { plan: 'Dorado', limiteExtraccion: 80000, limiteCompra: 400000, limiteCuotas: 390000, descripcion: 'Plan pre full, un plan con un límite extendido y holgado para la comodidad del usuario.' }, { plan: 'Black', limiteExtraccion: 150000, limiteCompra: 1200000, limiteCuotas: 1000000, descripcion: 'El plan black es un plan full premium que cuenta con un límite de más de un millón de pesos para compras en un pago o en cuotas' }];

        for (const tarjeta of tarjetaCredito) {

            plan1 = document.createElement('div');
            plan1.className = 'titulo subtitulo';
            plan1.innerHTML = `<div>
            ${tarjeta.plan}: Límite de extracción por cajero automático: $${tarjeta.limiteExtraccion}. Límite para compra en un pago: $${tarjeta.limiteCompra}. Límite para compra en cuotas: $${tarjeta.limiteCuotas}. ${tarjeta.descripcion}.
            </div>`;

            seccion.append(plan1);
        }

        boton = document.createElement('div');
        boton.className = 'titulo subtitulo';
        boton.innerHTML = `<div>
            <button id="basico" type="submit" class="btn btn-primary">Básico</button>
            <button id="platino" type="submit" class="btn btn-primary">Platino</button>
            <button id="dorado" type="submit" class="btn btn-primary">Dorado</button>
            <button id="black" type="submit" class="btn btn-primary">Black</button>
            </div>`;

        seccion.append(boton);

        let basico = document.getElementById('basico');

        basico.onclick = () => {

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Plan elegido: Básico</h3>
            <h3 class="titulo subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${usuario.telefono}. Saludos. </h3>
            <img id="img1" class="img" src="recursos/basico.png" alt="JavaScript">`

            contenedor.append(titulo);
        }

        let platino = document.getElementById('platino');

        platino.onclick = () => {

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Plan elegido: Platino</h3>
            <h3 class="titulo subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${usuario.telefono}. Saludos. </h3>
            <img id="img1" class="img" src="recursos/platino.png" alt="JavaScript">`

            contenedor.append(titulo);

        }

        let dorado = document.getElementById('dorado');

        dorado.onclick = () => {

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Plan elegido: Dorado</h3>
            <h3 class="titulo subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${usuario.telefono}. Saludos. </h3>
            <img id="img1" class="img" src="recursos/dorado.png" alt="JavaScript">`

            contenedor.append(titulo);
        }

        let black = document.getElementById('black');

        black.onclick = () => {

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Plan elegido: Black</h3>
            <h3 class="titulo subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${usuario.telefono}. Saludos. </h3>
            <img id="img1" class="img" src="recursos/black.png" alt="JavaScript">`

            contenedor.append(titulo);
        }
    }
}

noCliente.onclick = () => {

    let tasaInteres = 10;

    function porcentajePrestamo(numeroA, interes) {

        let resultado = (numeroA * interes) / 100 + numeroA;

        return resultado;
    }

    mensaje = "La tasa de interés para no-clientes es del 10%\n\nPor favor, elija entre los valores que podemos ofrecerle:\n1. $20000\n2. $50000\n3. $80000\n4. $100000";

    let prestamoCliente = prompt(mensaje);

    switch (prestamoCliente) {

        case "1":
            let section = document.getElementById('section1');
            section.remove();
            let img = document.getElementById('img');
            img.remove();

            let resultado = porcentajePrestamo(20000, tasaInteres);

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>`

            contenedor.append(titulo);

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="botones">
            <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
            </div>`;

            contenedor.append(cuotas);

            let botonCuotas = document.getElementById('cuotas');

            botonCuotas.onclick = () => {

                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                if (cuotas <= 18) {

                    const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                    alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
            break;

        case "2":

            let section1 = document.getElementById('section1');
            section1.remove();
            let img1 = document.getElementById('img');
            img1.remove();

            let resultado1 = porcentajePrestamo(50000, tasaInteres);

            let contenedor1 = document.getElementById('contenedor');

            let titulo1 = document.createElement('h3');
            titulo1.className = 'titulo subtitulo';
            titulo1.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado1}</h3>`

            contenedor1.append(titulo1);


            let cuotas1 = document.createElement('div');
            cuotas1.className = 'titulo subtitulo';
            cuotas1.innerHTML = `<div id="botones">
            <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
            </div>`;

            contenedor1.append(cuotas1);

            let botonCuotas1 = document.getElementById('cuotas');

            botonCuotas1.onclick = () => {

                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                if (cuotas <= 18) {

                    const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                    alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
            break;

        case "3":

            let section2 = document.getElementById('section1');
            section2.remove();
            let img2 = document.getElementById('img');
            img2.remove();

            let resultado2 = porcentajePrestamo(80000, tasaInteres);

            let contenedor2 = document.getElementById('contenedor');

            let titulo2 = document.createElement('h3');
            titulo2.className = 'titulo subtitulo';
            titulo2.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado2}</h3>`

            contenedor2.append(titulo2);

            let cuotas2 = document.createElement('div');
            cuotas2.className = 'titulo subtitulo';
            cuotas2.innerHTML = `<div id="botones">
            <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
            </div>`;

            contenedor2.append(cuotas2);

            let botonCuotas2 = document.getElementById('cuotas');

            botonCuotas2.onclick = () => {

                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                if (cuotas <= 18) {

                    const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                    alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
            break;

        case "4":

            let section3 = document.getElementById('section1');
            section3.remove();
            let img3 = document.getElementById('img');
            img3.remove();

            let resultado3 = porcentajePrestamo(100000, tasaInteres);

            let contenedor3 = document.getElementById('contenedor');

            let titulo3 = document.createElement('h3');
            titulo3.className = 'titulo subtitulo';
            titulo3.innerHTML = `<h3 class="titulo subtitulo">Su total a pagar será de ${resultado3}</h3>`

            contenedor3.append(titulo3);

            let cuotas3 = document.createElement('div');
            cuotas3.className = 'titulo subtitulo';
            cuotas3.innerHTML = `<div id="botones">
            <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button>
            </div>`;

            contenedor3.append(cuotas3);

            let botonCuotas3 = document.getElementById('cuotas');

            botonCuotas3.onclick = () => {

                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(prompt('Por favor indique el mínimo de cuotas en las cuales le gustaría saldar su préstamo:'))

                if (cuotas <= 18) {

                    const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);

                    alert('La cantidad de cuotas disponibles son las siguientes: ' + (JSON.stringify(filtro)));

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
            break;

        default:

            alert("Lo siento el número ingresado no es corresto");

            break;
    }
}



