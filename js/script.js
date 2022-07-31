

cliente = document.getElementById('btnSi');
noCliente = document.getElementById('btnNo');
quieroCliente = document.getElementById('btnQuiero');

class Usuario {
    constructor(usuario, contrasenia) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }
}

const usuario1 = new Usuario('usuario01', 'entrar01');

cliente.onclick = () => {

    let section = document.getElementById('section1');
    section.remove();

    let img = document.getElementById('img');
    img.remove();

    let seccion = document.getElementById(`contenedor`);

    cliente = document.createElement('div');
    cliente.className = 'titulo';
    cliente.innerHTML = `<div id="formulario"><h3 class="titulo subtitulo">Por favor ingrese a continuación su nombre de usuario y contraseña:</h3>
            <form class="container" action="#" method="post">
              <div class="form">
                <label for="nombreUsuario">Ingrese su de usuario:</label>
                <input id="nombreUsuario" type="text" class="form-control" placeholder="juan01">
                <label for="contrasenia">Ingrese su contraseña:</label>
                <input id="contrasenia" type="password" class="form-control" placeholder="********">
                <label for="recordarme">
                  <input type="checkbox" id="recordarme"> Guardar datos</input>
                </label>
                <div>
                  <button id="ingreso" type="submit" class="btn btn-primary">Iniciar sesión</button>
                </div>
              </div>
            </form></div>`;

    seccion.append(cliente);

    let inicio = document.getElementById('ingreso');

    inicio.onclick = (prevent) => {

        prevent.preventDefault();

        let usuario = document.getElementById('nombreUsuario').value;
        let contrasenia = document.getElementById('contrasenia').value;

        class Usuario {
            constructor(usuario, contrasenia) {
                this.usuario = usuario;
                this.contrasenia = contrasenia;
            }
        }

        const usuario1 = new Usuario('usuario01', 'entrar01');

        if (usuario === usuario1.usuario && contrasenia === usuario1.contrasenia) {

            let check = document.getElementById('recordarme');

            if (check.checked) {
                localStorage.setItem(`nombre`, usuario);
                localStorage.setItem(`contrasenia`, contrasenia);

            } else {
                sessionStorage.setItem(`nombre`, usuario);
                sessionStorage.setItem(`contrasenia`, contrasenia);
            }

            let recarga = document.getElementById('formulario');
            recarga.remove();

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
                titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

                contenedor.append(titulo);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    let total = document.getElementById('total');
                    total.remove();

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div id="cuotasId">
                    <form class="container" action="#" method="post" id="cuotasId">
                    <div class="form">
                    <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                        let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                        let disponibles = JSON.stringify(filtro);

                        if (cuotas <= 18) {

                            let cuotas = document.createElement('div');
                            cuotas.className = 'titulo subtitulo';
                            cuotas.innerHTML = `<div>
                        Las cuotas disponibles son ${disponibles}
                        </div>`;
                            contenedor.append(cuotas);

                        } else {

                            alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                        }
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
                titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

                contenedor.append(titulo);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    let total = document.getElementById('total');
                    total.remove();

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div id="cuotasId">
                    <form class="container" action="#" method="post" id="cuotasId">
                    <div class="form">
                    <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);
                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                        let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                        let disponibles = JSON.stringify(filtro);

                        if (cuotas <= 18) {

                            let cuotas = document.createElement('div');
                            cuotas.className = 'titulo subtitulo';
                            cuotas.innerHTML = `<div>
                        Las cuotas disponibles son ${disponibles}
                        </div>`;
                            contenedor.append(cuotas);

                        } else {

                            alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                        }
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
                titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

                contenedor.append(titulo);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    let total = document.getElementById('total');
                    total.remove();

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div id="cuotasId">
                    <form class="container" action="#" method="post" id="cuotasId">
                    <div class="form">
                    <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                        let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                        let disponibles = JSON.stringify(filtro);

                        if (cuotas <= 18) {

                            let cuotas = document.createElement('div');
                            cuotas.className = 'titulo subtitulo';
                            cuotas.innerHTML = `<div>
                        Las cuotas disponibles son ${disponibles}
                        </div>`;
                            contenedor.append(cuotas);

                        } else {

                            alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                        }
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
                titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

                contenedor.append(titulo);

                let botonCuotas = document.getElementById('cuotas');

                botonCuotas.onclick = () => {

                    let total = document.getElementById('total');
                    total.remove();

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div id="cuotasId">
                    <form class="container" action="#" method="post" id="cuotasId">
                    <div class="form">
                    <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                        let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                        let disponibles = JSON.stringify(filtro);

                        if (cuotas <= 18) {

                            let cuotas = document.createElement('div');
                            cuotas.className = 'titulo subtitulo';
                            cuotas.innerHTML = `<div>
                        Las cuotas disponibles son ${disponibles}
                        </div>`;
                            contenedor.append(cuotas);

                        } else {

                            alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                        }
                    }
                }
            }


        } else {

            let error = document.createElement('h3');
            error.className = 'titulo subtitulo';
            error.innerHTML = `<h3 class="titulo subtitulo">Sus datos son incorrectos. Vuelva a intentarlo</h3>`
            seccion.prepend(error);
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
    nuevoCliente.innerHTML = `<div id="section2"><h3  class="titulo subtitulo">Por favor ingrese sus datos de ingreso:</h3>
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
            plan1.className = 'subtitulo';
            plan1.innerHTML = `<div >
            ${tarjeta.plan}: Límite de extracción por cajero automático: $${tarjeta.limiteExtraccion}. Límite para compra en un pago: $${tarjeta.limiteCompra}. Límite para compra en cuotas: $${tarjeta.limiteCuotas}. ${tarjeta.descripcion}.
            </div>`;

            seccion.append(plan1);
        }

        boton = document.createElement('div');
        boton.className = 'titulo subtitulo';
        boton.innerHTML = `<div id="botones">
            <button id="basico" type="submit" class="btn btn-primary">Basico</button>
            <button id="platino" type="submit" class="btn btn-primary">Platino</button>
            <button id="dorado" type="submit" class="btn btn-primary">Dorado</button>
            <button id="black" type="submit" class="btn btn-primary">Black</button>
            </div>`;

        seccion.append(boton);

        let basico = document.getElementById('basico');

        basico.onclick = () => {

            let botones = document.getElementById('botones');
            botones.remove();

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('h3');
            titulo.className = 'titulo subtitulo';
            titulo.innerHTML = `<h3 class="titulo subtitulo">Plan elegido: Básico</h3>
            <h2 class="titulo subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${usuario.telefono}. Saludos. </h2>
            <img id="img1" class="img" src="recursos/basico.png" alt="JavaScript">
            `

            contenedor.append(titulo);
        }

        let platino = document.getElementById('platino');


        platino.onclick = () => {

            let botones = document.getElementById('botones');
            botones.remove();

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

            let botones = document.getElementById('botones');
            botones.remove();

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

            let botones = document.getElementById('botones');
            botones.remove();

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

noCliente.onclick = (prevent) => {
    prevent.preventDefault();

    let section = document.getElementById('section1');
    section.remove();

    let img = document.getElementById('img');
    img.remove();

    let tasaInteres = 10;

    function porcentajePrestamo(numeroA, interes) {

        let resultado = (numeroA * interes) / 100 + numeroA;

        return resultado;
    }

    let titulo = document.createElement('div');
    titulo.className = 'subtitulo';
    titulo.innerHTML = `<div id="radioNoCliente" >
    <h3 class="titulo subtitulo">La tasa de interés para no-clientes es del 10%. Por favor elija entre los valores que podemos ofrecerle:</h3>
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form-check">
            <input class="form-check-input input" type="radio" name="flexRadioDefault" id="radio">
            <label class="form-check-label" for="radio">
              $20000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1">
            <label class="form-check-label" for="radio2">
              $50000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2">
            <label class="form-check-label" for="radio3">
              $80000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3">
            <label class="form-check-label" for="radio3">
              $1000000
            </label>
          </div>
          </form>
          </div>`

    contenedor.prepend(titulo);

    let radio = document.getElementById('radio');
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');

    radio.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado = porcentajePrestamo(20000, tasaInteres);

        let contenedor = document.getElementById('contenedor');

        let titulo1 = document.createElement('div');
        titulo1.className = 'titulo subtitulo';
        titulo1.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor.append(titulo1);

        let botonCuotas1 = document.getElementById('cuotas');

        botonCuotas1.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                let disponibles = JSON.stringify(filtro);

                if (cuotas <= 18) {

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div>
                    Las cuotas disponibles son ${disponibles}
                    </div>`;
                    contenedor.append(cuotas);

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
        }
    }

    radio1.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado1 = porcentajePrestamo(50000, tasaInteres);

        let contenedor1 = document.getElementById('contenedor');

        let titulo1 = document.createElement('div');
        titulo1.className = 'titulo subtitulo';
        titulo1.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado1}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor1.append(titulo1);

        let botonCuotas1 = document.getElementById('cuotas');

        botonCuotas1.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor1.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                let disponibles = JSON.stringify(filtro);

                if (cuotas <= 18) {

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div>
                    Las cuotas disponibles son ${disponibles}
                    </div>`;
                    contenedor1.append(cuotas);

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
        }
    }

    radio2.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado2 = porcentajePrestamo(80000, tasaInteres);

        let contenedor2 = document.getElementById('contenedor');

        let titulo2 = document.createElement('h3');
        titulo2.className = 'titulo subtitulo';
        titulo2.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado2}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor2.append(titulo2);

        let botonCuotas2 = document.getElementById('cuotas');

        botonCuotas2.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor2.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                let disponibles = JSON.stringify(filtro);
                if (cuotas <= 18) {

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div>
                    Las cuotas disponibles son ${disponibles}
                    </div>`;
                    contenedor2.append(cuotas);

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
        }
    }

    radio3.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado2 = porcentajePrestamo(100000, tasaInteres);

        let contenedor2 = document.getElementById('contenedor');

        let titulo2 = document.createElement('h3');
        titulo2.className = 'titulo subtitulo';
        titulo2.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado2}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor2.append(titulo2);

        let botonCuotas2 = document.getElementById('cuotas');

        botonCuotas2.onclick = () => {


            let total = document.getElementById('total');
            total.remove();

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Por favor ingrese el minimo de cuotas en las que le gustaría pagar:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor2.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [1, 3, 6, 9, 12, 18];

                let cuotas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.filter((cuota) => cuota >= cuotas);
                let disponibles = JSON.stringify(filtro);
                if (cuotas <= 18) {

                    let cuotas = document.createElement('div');
                    cuotas.className = 'titulo subtitulo';
                    cuotas.innerHTML = `<div>
                    Las cuotas disponibles son ${disponibles}
                    </div>`;
                    contenedor2.append(cuotas);

                } else {

                    alert('Lo siento no contamos con esa cantidad de cuotas disponible en este momento');
                }
            }
        }
    }
}





