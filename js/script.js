

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

    let contenedor = document.getElementById(`contenedor`);

    cliente = document.createElement('div');
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

    contenedor.append(cliente);

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

                const nombreUsuarioLocal = localStorage.getItem('nombre');

                Toastify({
                    text: 'Su ' + nombreUsuarioLocal + ' ha sido guardado con éxito',
                    duration: 5000,
                    newWindow: true,
                    offset: {
                        y: '200%'
                    },
                    position: "center",
                    style: {
                        background: "#7B68EE",
                    }
                }).showToast();

            } else {
                sessionStorage.setItem(`nombre`, usuario);
                sessionStorage.setItem(`contrasenia`, contrasenia);

                const nombreUsuarioSession = sessionStorage.getItem('nombre');
                Toastify({
                    text: 'Su ' + nombreUsuarioSession + ' no se ha guardado en este dispositivo',
                    duration: 5000,
                    newWindow: true,
                    offset: {
                        y: '200%'
                    },
                    position: "center",
                    stopOnFocus: true,
                    style: {
                        background: "#7B68EE",
                    }
                }).showToast();
            }

            let recarga = document.getElementById('formulario');
            recarga.remove();

            contenedor.innerHTML = ``;

            cliente = document.createElement('div');
            cliente.innerHTML = `<div id="section2"><h3  class="titulo subtitulo">Por ser cliente de nuestro banco la tasa de interés por su prestamos es solo del 8%. Por favor, elija entre los valores que podemos ofrecerle:</h3>
            </div>`;

            contenedor.append(cliente);

            cantidad = document.createElement('div');
            cantidad.innerHTML = `<div id="botones"  class="titulo subtitulo">
            <button id="20" type="submit" class="btn btn-primary">$20000</button>
            <button id="50" type="submit" class="btn btn-primary">$50000</button>
            <button id="80" type="submit" class="btn btn-primary">$80000</button>
            <button id="100" type="submit" class="btn btn-primary">$100000</button>
            </div>`;

            contenedor.append(cantidad);

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

                let titulo = document.createElement('div');
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
                    <label for="cuotasCantidad">Por favor ingrese el monto mínimo de cuotas en las cuales le gustaría saldar su deuda:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();

                        const cuotasDisponibles = [
                            {
                                cuotas: 1,
                                totalCadaCuota: resultado
                            }, {
                                cuotas: 3,
                                totalCadaCuota: (resultado / 3)
                            }, {
                                cuotas: 6,
                                totalCadaCuota: (resultado / 6)
                            }, {
                                cuotas: 9,
                                totalCadaCuota: (resultado / 9)
                            }, {
                                cuotas: 12,
                                totalCadaCuota: (resultado / 12)
                            }

                        ];

                        let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                        const disponibleCuota = JSON.stringify(filtro.cuotas);
                        const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                        function cuotasFunction() {
                            contenedor.innerHTML = ``;

                            let financiacion = document.createElement('div');
                            financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                            contenedor.append(financiacion);
                        }

                        cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');
                        let finalizar = document.getElementById('finalizar');

                        finalizar.onclick = () => {
                            contenedor.innerHTML = ``;

                            let fin = document.createElement('div');
                            fin.innerHTML = `<div class="titulo subtitulo">
                            Gracias por elegirnos, su préstamo será depositado en su cuenta JavaScript.
                            </div>`;
                            contenedor.append(fin);

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
                    <label for="cuotasCantidad">Por favor ingrese el monto mínimo de cuotas en las cuales le gustaría saldar su deuda:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);
                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [
                            {
                                cuotas: 1,
                                totalCadaCuota: resultado
                            }, {
                                cuotas: 3,
                                totalCadaCuota: (resultado / 3)
                            }, {
                                cuotas: 6,
                                totalCadaCuota: (resultado / 6)
                            }, {
                                cuotas: 9,
                                totalCadaCuota: (resultado / 9)
                            }, {
                                cuotas: 12,
                                totalCadaCuota: (resultado / 12)
                            }

                        ];

                        let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                        const disponibleCuota = JSON.stringify(filtro.cuotas);
                        const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                        function cuotasFunction() {
                            contenedor.innerHTML = ``;

                            let financiacion = document.createElement('div');
                            financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                            contenedor.append(financiacion);
                        }

                        cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                        let finalizar = document.getElementById('finalizar');

                        finalizar.onclick = () => {
                            contenedor.innerHTML = ``;

                            let fin = document.createElement('div');
                            fin.innerHTML = `<div class="titulo subtitulo">
                            Gracias por elegirnos, su préstamo será depositado en su cuenta JavaScript.
                            </div>`;
                            contenedor.append(fin);

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
                    <label for="cuotasCantidad">Por favor ingrese el monto mínimo de cuotas en las cuales le gustaría saldar su deuda:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [
                            {
                                cuotas: 1,
                                totalCadaCuota: resultado
                            }, {
                                cuotas: 3,
                                totalCadaCuota: (resultado / 3)
                            }, {
                                cuotas: 6,
                                totalCadaCuota: (resultado / 6)
                            }, {
                                cuotas: 9,
                                totalCadaCuota: (resultado / 9)
                            }, {
                                cuotas: 12,
                                totalCadaCuota: (resultado / 12)
                            }

                        ];

                        let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                        const disponibleCuota = JSON.stringify(filtro.cuotas);
                        const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                        function cuotasFunction() {
                            contenedor.innerHTML = ``;

                            let financiacion = document.createElement('div');
                            financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                            contenedor.append(financiacion);
                        }

                        cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                        let finalizar = document.getElementById('finalizar');

                        finalizar.onclick = () => {
                            contenedor.innerHTML = ``;

                            let fin = document.createElement('div');
                            fin.innerHTML = `<div class="titulo subtitulo">
                            Gracias por elegirnos, su préstamo será depositado en su cuenta JavaScript.
                            </div>`;
                            contenedor.append(fin);

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
                    <label for="cuotasCantidad">Por favor ingrese el monto mínimo de cuotas en las cuales le gustaría saldar su deuda:</label>
                    <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
                    <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
                    </form>
                    </div>
                    </div>`;

                    contenedor.prepend(cuotas);

                    let cuotasBoton = document.getElementById('cuotasBoton');
                    cuotasBoton.onclick = (prevent) => {

                        prevent.preventDefault();
                        const cuotasDisponibles = [
                            {
                                cuotas: 1,
                                totalCadaCuota: resultado
                            }, {
                                cuotas: 3,
                                totalCadaCuota: (resultado / 3)
                            }, {
                                cuotas: 6,
                                totalCadaCuota: (resultado / 6)
                            }, {
                                cuotas: 9,
                                totalCadaCuota: (resultado / 9)
                            }, {
                                cuotas: 12,
                                totalCadaCuota: (resultado / 12)
                            }

                        ];
                        let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                        const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                        const disponibleCuota = JSON.stringify(filtro.cuotas);
                        const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                        function cuotasFunction() {
                            contenedor.innerHTML = ``;

                            let financiacion = document.createElement('div');
                            financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                            contenedor.append(financiacion);
                        }

                        cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                        let finalizar = document.getElementById('finalizar');

                        finalizar.onclick = () => {
                            contenedor.innerHTML = ``;

                            let fin = document.createElement('div');
                            fin.innerHTML = `<div class="titulo subtitulo">
                            Gracias por elegirnos, su préstamo será depositado en su cuenta JavaScript.
                            </div>`;
                            contenedor.append(fin);

                        }
                    }
                }
            }

        } else {

            contenedor.innerHTML = ``;
            let error = document.createElement('h3')
            error.innerHTML = `<h3 class="titulo subtitulo">Sus datos son incorrectos. Vuelva a intentarlo</h3>
            <button id="volver" type="submit" class="btn btn-primary">Volver</button>`
            contenedor.append(error);
            let volver = document.getElementById('volver');
            volver.onclick = () => {
                history.go();
            }
        }
    }
}

quieroCliente.onclick = () => {

    let section = document.getElementById('section1');
    section.remove();

    let img = document.getElementById('img');
    img.remove();

    let contenedor = document.getElementById(`contenedor`);

    nuevoCliente = document.createElement('div');
    nuevoCliente.innerHTML = `
    <div id="section2" class="titulo subtitulo"><h3>Por favor ingrese sus datos para crear un usuario:</h3>
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

    contenedor.append(nuevoCliente);

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

        const { cliente, telefono } = usuario

        Toastify({
            text: cliente + ' su usuario fue creado con éxito, a continuación le mostramos los planes que podemos ofrecerle',
            duration: 5000,
            newWindow: true,
            offset: {
                x: '50%',
                y: '50%'
            },
            style: {
                background: "	#7B68EE",
            }
        }).showToast();

        let section2 = document.getElementById('section2');
        section2.remove();

        const tarjetaCredito = [{ plan: 'Básico', limiteExtraccion: 20000, limiteCompra: 100000, limiteCuotas: 90000, descripcion: 'Plan básico, sencillo y cómodo, cuenta con un límite para compras en cuotas y en un solo pago reducido para el uso conservado.' }, { plan: 'Platino', limiteExtraccion: 40000, limiteCompra: 280000, limiteCuotas: 260000, descripcion: 'Plan aumentado, un plan con un límite superior para compras tanto en cuotas como en un pago.' }, { plan: 'Dorado', limiteExtraccion: 80000, limiteCompra: 400000, limiteCuotas: 390000, descripcion: 'Plan pre full, un plan con un límite extendido y holgado para la comodidad del usuario.' }, { plan: 'Black', limiteExtraccion: 150000, limiteCompra: 1200000, limiteCuotas: 1000000, descripcion: 'El plan black es un plan full premium que cuenta con un límite de más de un millón de pesos para compras en un pago o en cuotas' }];

        for (const tarjeta of tarjetaCredito) {

            plan1 = document.createElement('div');
            plan1.innerHTML = `<div class="subtitulo">
            ${tarjeta.plan}: Límite de extracción por cajero automático: $${tarjeta.limiteExtraccion}. Límite para compra en un pago: $${tarjeta.limiteCompra}. Límite para compra en cuotas: $${tarjeta.limiteCuotas}. ${tarjeta.descripcion}.
            </div>`;

            contenedor.append(plan1);
        }

        boton = document.createElement('div');
        boton.className = 'titulo subtitulo';
        boton.innerHTML = `<div id="botones">
            <button id="basico" type="submit" class="btn btn-primary">Basico</button>
            <button id="platino" type="submit" class="btn btn-primary">Platino</button>
            <button id="dorado" type="submit" class="btn btn-primary">Dorado</button>
            <button id="black" type="submit" class="btn btn-primary">Black</button>
            </div>`;

        contenedor.append(boton);

        let basico = document.getElementById('basico');

        basico.onclick = () => {

            contenedor.innerHTML = ``;

            let titulo = document.createElement('h3');
            titulo.innerHTML = `<h3 class="titulo">Plan elegido: Básico</h3>
            <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
            <img id="img1" class="img" src="recursos/basico.png" alt="JavaScript">
            `
            contenedor.append(titulo);
        }

        let platino = document.getElementById('platino');

        platino.onclick = () => {

            contenedor.innerHTML = ``;

            let titulo = document.createElement('h3');
            titulo.innerHTML = `<h3 class="titulo">Plan elegido: Platino</h3>
            <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
            <img id="img1" class="img" src="recursos/platino.png" alt="JavaScript">`

            contenedor.append(titulo);
        }

        let dorado = document.getElementById('dorado');

        dorado.onclick = () => {

            contenedor.innerHTML = ``;

            let titulo = document.createElement('h3');
            titulo.innerHTML = `<h3 class="titulo">Plan elegido: Dorado</h3>
                <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
                <img id="img1" class="img" src="recursos/dorado.png" alt="JavaScript">`

            contenedor.append(titulo);
        }

        let black = document.getElementById('black');

        black.onclick = () => {

            contenedor.innerHTML = ``;

            let titulo = document.createElement('h3');
            titulo.innerHTML = `<h3 class="titulo">Plan elegido: Black</h3>
            <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
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
    titulo.innerHTML = `<div id="radioNoCliente" class="subtitulo" >
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

        let titulo = document.createElement('div');
        titulo.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor.append(titulo);

        let botonCuotas = document.getElementById('cuotas');

        botonCuotas.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            const cuotasDisponibles = [1, 3, 6, 9, 12];

            let min = Math.min(...cuotasDisponibles);
            let max = Math.max(...cuotasDisponibles);

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Sabiendo que la cantidad mínimo de cuotas es ${min} y el máximo ${max} por favor ingrese la cantidad en las cuales le gustaría saldar su deuda:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [
                    {
                        cuotas: 1,
                        totalCadaCuota: resultado
                    }, {
                        cuotas: 3,
                        totalCadaCuota: parseInt(resultado / 3)
                    }, {
                        cuotas: 6,
                        totalCadaCuota: parseInt(resultado / 6)
                    }, {
                        cuotas: 9,
                        totalCadaCuota: parseInt(resultado / 9)
                    }, {
                        cuotas: 12,
                        totalCadaCuota: parseInt(resultado / 12)
                    }

                ];

                let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                const disponibleCuota = JSON.stringify(filtro.cuotas);
                const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                function cuotasFunction() {
                    contenedor.innerHTML = ``;

                    let financiacion = document.createElement('div');
                    financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                    contenedor.append(financiacion);
                }

                cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                let finalizar = document.getElementById('finalizar');

                finalizar.onclick = () => {
                    contenedor.innerHTML = ``;

                    let fin = document.createElement('div');
                    fin.innerHTML = `<div class="titulo subtitulo">
                    Gracias por elegirnos, por favor ingrese los siguientes datos para que un representante se ponga en contacto con usted:
                    <form class="container" action="#" method="post">
                    <div class="form">
                        <label for="nombre">Nombre y apellido:</label>
                        <input id="nombre" type="text" class="form-control" placeholder="Nombre Apellido">
                        <label for="telefono">Teléfono:</label>
                        <input id="telefono" type="number" class="form-control" placeholder="1112345678">
                        <label for="nombreUsuario">Email</label>
                        <input id="email" type="email" class="form-control" placeholder="ejempl@gmail.com">
                        <div>
                            <button id="contacto" type="submit" class="btn btn-primary">Contactarme</button>
                        </div>
                    </div>
                </form>
                    </div>`;
                    contenedor.append(fin);

                    let contactame = document.getElementById('contacto');

                    contactame.onclick = (evento) => {

                        let nombreNoCliente = document.getElementById('nombre').value;
                        let telefonoNoCliente = document.getElementById('telefono').value;
                        let emailNoCliente = document.getElementById('email').value;
                        evento.preventDefault();

                        const datos = {
                            nombre: nombreNoCliente,
                            telefono: telefonoNoCliente,
                            email: emailNoCliente
                        }

                        let { nombre, telefono, email } = datos

                        contenedor.innerHTML = ``;

                        let contacto = document.createElement('div');
                        contacto.innerHTML = `
                        <div class="titulo subtitulo">
                            <div>${nombre} un represtenate se pondrá en contacto con usted a los medios proporcionados: </div>
                            <div>Teléfono: ${telefono}</div>
                            <div>Email: ${email}</div>
                        </div>`;
                        contenedor.append(contacto);

                    }
                }
            }
        }
    }

    radio1.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado = porcentajePrestamo(50000, tasaInteres);

        let contenedor = document.getElementById('contenedor');

        let titulo = document.createElement('div');
        titulo.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor.append(titulo);

        let botonCuotas = document.getElementById('cuotas');

        botonCuotas.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            const cuotasDisponibles = [1, 3, 6, 9, 12];

            let min = Math.min(...cuotasDisponibles);
            let max = Math.max(...cuotasDisponibles);

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Sabiendo que la cantidad mínimo de cuotas es ${min} y el máximo ${max} por favor ingrese la cantidad en las cuales le gustaría saldar su deuda:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [
                    {
                        cuotas: 1,
                        totalCadaCuota: resultado
                    }, {
                        cuotas: 3,
                        totalCadaCuota: parseInt(resultado / 3)
                    }, {
                        cuotas: 6,
                        totalCadaCuota: parseInt(resultado / 6)
                    }, {
                        cuotas: 9,
                        totalCadaCuota: parseInt(resultado / 9)
                    }, {
                        cuotas: 12,
                        totalCadaCuota: parseInt(resultado / 12)
                    }

                ];

                let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                const disponibleCuota = JSON.stringify(filtro.cuotas);
                const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                function cuotasFunction() {
                    contenedor.innerHTML = ``;

                    let financiacion = document.createElement('div');
                    financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                    contenedor.append(financiacion);
                }

                cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                let finalizar = document.getElementById('finalizar');

                finalizar.onclick = () => {
                    contenedor.innerHTML = ``;

                    let fin = document.createElement('div');
                    fin.innerHTML = `<div class="titulo subtitulo">
                    Gracias por elegirnos, por favor ingrese los siguientes datos para que un representante se ponga en contacto con usted:
                    <form class="container" action="#" method="post">
                    <div class="form">
                        <label for="nombre">Nombre y apellido:</label>
                        <input id="nombre" type="text" class="form-control" placeholder="Nombre Apellido">
                        <label for="telefono">Teléfono:</label>
                        <input id="telefono" type="number" class="form-control" placeholder="1112345678">
                        <label for="nombreUsuario">Email</label>
                        <input id="email" type="email" class="form-control" placeholder="ejempl@gmail.com">
                        <div>
                            <button id="contacto" type="submit" class="btn btn-primary">Contactarme</button>
                        </div>
                    </div>
                </form>
                    </div>`;
                    contenedor.append(fin);

                    let contactame = document.getElementById('contacto');

                    contactame.onclick = (evento) => {

                        let nombreNoCliente = document.getElementById('nombre').value;
                        let telefonoNoCliente = document.getElementById('telefono').value;
                        let emailNoCliente = document.getElementById('email').value;
                        evento.preventDefault();

                        const datos = {
                            nombre: nombreNoCliente,
                            telefono: telefonoNoCliente,
                            email: emailNoCliente
                        }

                        let { nombre, telefono, email } = datos

                        contenedor.innerHTML = ``;

                        let contacto = document.createElement('div');
                        contacto.innerHTML = `
                        <div class="titulo subtitulo">
                            <div>${nombre} un represtenate se pondrá en contacto con usted a los medios proporcionados: </div>
                            <div>Teléfono: ${telefono}</div>
                            <div>Email: ${email}</div>
                        </div>`;
                        contenedor.append(contacto);
                    }
                }
            }
        }
    }

    radio2.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado = porcentajePrestamo(80000, tasaInteres);

        let contenedor = document.getElementById('contenedor');

        let titulo = document.createElement('h3');
        titulo.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor.append(titulo);

        let botonCuotas = document.getElementById('cuotas');

        botonCuotas.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            const cuotasDisponibles = [1, 3, 6, 9, 12];

            let min = Math.min(...cuotasDisponibles);
            let max = Math.max(...cuotasDisponibles);

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Sabiendo que la cantidad mínimo de cuotas es ${min} y el máximo ${max} por favor ingrese la cantidad en las cuales le gustaría saldar su deuda:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [
                    {
                        cuotas: 1,
                        totalCadaCuota: resultado
                    }, {
                        cuotas: 3,
                        totalCadaCuota: parseInt(resultado / 3)
                    }, {
                        cuotas: 6,
                        totalCadaCuota: parseInt(resultado / 6)
                    }, {
                        cuotas: 9,
                        totalCadaCuota: parseInt(resultado / 9)
                    }, {
                        cuotas: 12,
                        totalCadaCuota: parseInt(resultado / 12)
                    }

                ];

                let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                const disponibleCuota = JSON.stringify(filtro.cuotas);
                const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                function cuotasFunction() {
                    contenedor.innerHTML = ``;

                    let financiacion = document.createElement('div');
                    financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                    contenedor.append(financiacion);
                }

                cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                let finalizar = document.getElementById('finalizar');

                finalizar.onclick = () => {
                    contenedor.innerHTML = ``;

                    let fin = document.createElement('div');
                    fin.innerHTML = `<div class="titulo subtitulo">
                    Gracias por elegirnos, por favor ingrese los siguientes datos para que un representante se ponga en contacto con usted:
                    <form class="container" action="#" method="post">
                    <div class="form">
                        <label for="nombre">Nombre y apellido:</label>
                        <input id="nombre" type="text" class="form-control" placeholder="Nombre Apellido">
                        <label for="telefono">Teléfono:</label>
                        <input id="telefono" type="number" class="form-control" placeholder="1112345678">
                        <label for="nombreUsuario">Email</label>
                        <input id="email" type="email" class="form-control" placeholder="ejempl@gmail.com">
                        <div>
                            <button id="contacto" type="submit" class="btn btn-primary">Contactarme</button>
                        </div>
                    </div>
                </form>
                    </div>`;
                    contenedor.append(fin);

                    let contactame = document.getElementById('contacto');

                    contactame.onclick = (evento) => {

                        let nombreNoCliente = document.getElementById('nombre').value;
                        let telefonoNoCliente = document.getElementById('telefono').value;
                        let emailNoCliente = document.getElementById('email').value;
                        evento.preventDefault();

                        const datos = {
                            nombre: nombreNoCliente,
                            telefono: telefonoNoCliente,
                            email: emailNoCliente
                        }

                        let { nombre, telefono, email } = datos

                        contenedor.innerHTML = ``;

                        let contacto = document.createElement('div');
                        contacto.innerHTML = `
                        <div class="titulo subtitulo">
                            <div>${nombre} un represtenate se pondrá en contacto con usted a los medios proporcionados: </div>
                            <div>Teléfono: ${telefono}</div>
                            <div>Email: ${email}</div>
                        </div>`;
                        contenedor.append(contacto);

                    }
                }
            }
        }
    }

    radio3.onclick = () => {

        let radioNoCliente = document.getElementById('radioNoCliente');
        radioNoCliente.remove();

        let resultado = porcentajePrestamo(100000, tasaInteres);

        let contenedor = document.getElementById('contenedor');

        let titulo = document.createElement('h3');
        titulo.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de ${resultado}</h3>
        <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

        contenedor.append(titulo);

        let botonCuotas = document.getElementById('cuotas');

        botonCuotas.onclick = () => {

            let total = document.getElementById('total');
            total.remove();

            const cuotasDisponibles = [1, 3, 6, 9, 12];

            let min = Math.min(...cuotasDisponibles);
            let max = Math.max(...cuotasDisponibles);

            let cuotas = document.createElement('div');
            cuotas.className = 'titulo subtitulo';
            cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Sabiendo que la cantidad mínimo de cuotas es ${min} y el máximo ${max} por favor ingrese la cantidad en las cuales le gustaría saldar su deuda:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

            contenedor.prepend(cuotas);

            let cuotasBoton = document.getElementById('cuotasBoton');
            cuotasBoton.onclick = (prevent) => {

                prevent.preventDefault();
                const cuotasDisponibles = [
                    {
                        cuotas: 1,
                        totalCadaCuota: resultado
                    }, {
                        cuotas: 3,
                        totalCadaCuota: parseInt(resultado / 3)
                    }, {
                        cuotas: 6,
                        totalCadaCuota: parseInt(resultado / 6)
                    }, {
                        cuotas: 9,
                        totalCadaCuota: parseInt(resultado / 9)
                    }, {
                        cuotas: 12,
                        totalCadaCuota: parseInt(resultado / 12)
                    }

                ];

                let cuotasElegidas = parseInt(document.getElementById('cuotasCantidad').value);
                const filtro = cuotasDisponibles.find((cuota) => cuota.cuotas >= cuotasElegidas);
                const disponibleCuota = JSON.stringify(filtro.cuotas);
                const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                function cuotasFunction() {
                    contenedor.innerHTML = ``;

                    let financiacion = document.createElement('div');
                    financiacion.innerHTML = `<div class="titulo subtitulo">
                            Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}
                            </div>
                            <button id="finalizar" type="submit" class="btn btn-primary">Finalizar</button>`;
                    contenedor.append(financiacion);
                }

                cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');

                let finalizar = document.getElementById('finalizar');

                finalizar.onclick = () => {
                    contenedor.innerHTML = ``;

                    let fin = document.createElement('div');
                    fin.innerHTML = `<div class="titulo subtitulo">
                    Gracias por elegirnos, por favor ingrese los siguientes datos para que un representante se ponga en contacto con usted:
                    <form class="container" action="#" method="post">
                    <div class="form">
                        <label for="nombre">Nombre y apellido:</label>
                        <input id="nombre" type="text" class="form-control" placeholder="Nombre Apellido">
                        <label for="telefono">Teléfono:</label>
                        <input id="telefono" type="number" class="form-control" placeholder="1112345678">
                        <label for="nombreUsuario">Email</label>
                        <input id="email" type="email" class="form-control" placeholder="ejempl@gmail.com">
                        <div>
                            <button id="contacto" type="submit" class="btn btn-primary">Contactarme</button>
                        </div>
                    </div>
                </form>
                    </div>`;
                    contenedor.append(fin);

                    let contactame = document.getElementById('contacto');

                    contactame.onclick = (evento) => {

                        let nombreNoCliente = document.getElementById('nombre').value;
                        let telefonoNoCliente = document.getElementById('telefono').value;
                        let emailNoCliente = document.getElementById('email').value;
                        evento.preventDefault();

                        const datos = {
                            nombre: nombreNoCliente,
                            telefono: telefonoNoCliente,
                            email: emailNoCliente
                        }

                        let { nombre, telefono, email } = datos

                        contenedor.innerHTML = ``;

                        let contacto = document.createElement('div');
                        contacto.innerHTML = `
                        <div class="titulo subtitulo">
                            <div>${nombre} un represtenate se pondrá en contacto con usted a los medios proporcionados: </div>
                            <div>Teléfono: ${telefono}</div>
                            <div>Email: ${email}</div>
                        </div>`;
                        contenedor.append(contacto);
                    }
                }
            }
        }
    }
}





