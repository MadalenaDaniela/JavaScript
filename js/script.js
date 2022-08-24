

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


function limpiarInicio() {
    let nav = document.getElementById('nav');
    nav.remove();

    let section = document.getElementById('section1');
    section.remove();

    let img = document.getElementById('img');
    img.remove();
}


cliente.onclick = () => {
    limpiarInicio()

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
                    duration: 2000,
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
                    duration: 2000,
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
            <button id="20" type="submit" value="20000" class="prestamo btn btn-primary">$20000</button>
            <button id="50" type="submit" value="50000" class="prestamo btn btn-primary">$50000</button>
            <button id="80" type="submit" value="80000" class="prestamo btn btn-primary">$80000</button>
            <button id="100" type="submit" value="100000" class="prestamo btn btn-primary">$100000</button>
            </div>`;

            contenedor.append(cantidad);

            function limpiar() {
                let limpiar = document.getElementById('botones');
                limpiar.remove();
                let limpiar1 = document.getElementById('section2');
                limpiar1.remove();
            }

            let tasaInteres = 8;

            function porcentajePrestamo(numeroA, interes) {

                let resultado = (numeroA * interes) / 100 + numeroA;

                return resultado;
            }

            function crearIngresoCuotas() {

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
            }


            let seleccion = document.getElementsByClassName('prestamo');
            for (let boton of seleccion) {
                boton.addEventListener('click', (valor) => {

                    limpiar()


                    let seleccionado = valor.target.value;
                    let resultado = porcentajePrestamo(parseInt(seleccionado), tasaInteres);

                    let contenedor = document.getElementById('contenedor');

                    let titulo = document.createElement('div');
                    titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">Su total a pagar será de $${resultado}</h3>
                <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

                    contenedor.append(titulo);

                    let botonCuotas = document.getElementById('cuotas');

                    botonCuotas.onclick = () => {

                        let total = document.getElementById('total');
                        total.remove();

                        crearIngresoCuotas()

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

                            function cuotasFunction() {

                                const disponibleCuota = JSON.stringify(filtro.cuotas);
                                const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

                                contenedor.innerHTML = ``;

                                let financiacion = document.createElement('div');
                                financiacion.innerHTML = `
                                <div class="titulo subtitulo">
                                    <h3>Las cuotas disponibles en base a su solicitud son: ${disponibleCuota} y el valor de cada una será de: $${disponiblePrecio}.
                                    </h3>
                                    <div class="subtitulo">
                                    Por favor a continuación seleccione su tutor bancario, el mismo se pondrá en contacto con usted. Muchas gracias:
                                    </div>
                                    <div class="container form">
                                        <select id="select" class="form-select" aria-label="Default select example">
                                            <option value="Selected">Seleccionar</option>
                                            <option value="Leanne Graham">Leanne Graham</option>
                                            <option value="Ervin Howell">Ervin Howell</option>
                                            <option value="Clementine Bauch">Clementine Bauch</option>
                                            <option value="Patricia Lebsack">Patricia Lebsack</option>
                                            <option value="Chelsey Dietrich">Chelsey Dietrich</option>
                                            <option value="Mrs. Dennis Schulist">Mrs. Dennis Schulist</option>
                                            <option value="Kurtis Weissnat">Kurtis Weissnat</option>
                                            <option value="Nicholas Runolfsdottir V">Nicholas Runolfsdottir V</option>
                                            <option value="Glenna Reichert">Glenna Reichert</option>
                                            <option value="Clementina DuBuque">Clementina DuBuque</option>
                                        </select>
                                     </div>
                                     <button id="finalizar" type="submit" class="btn btn-primary">Contactarme</button>
                                </div>`;
                                contenedor.append(financiacion);
                            }

                            cuotasElegidas <= 12 ? cuotasFunction() : alert('Lo siento, esa cantidad de cuotas no está disponible en este momento');
                            function filtrar(array) {

                                let nombre = select.value;
                                if (nombre == "Selected") {

                                    contenedor.innerHTML = ``;
                                    let titulo = document.createElement('div');
                                    titulo.innerHTML = `<div id="total"><h3 class="titulo subtitulo">No hubo selección. En el transcurso del día alguien de nuestro equipo se pondrá en contacto con usted, o si lo desea, aquí dejamos una lista de nuestros representantes y sus respectivos medios de contacto a su disposición. Gracias.</div>`

                                    contenedor.append(titulo);

                                    return array;
                                } else {
                                    contenedor.innerHTML = ``;
                                    return array.filter((item) => item.name == nombre);
                                }
                            }

                            function crearHtml(array) {
                                array.forEach(representante => {
                                    const ficha = `
                                    <div class="tarjetas">
                                        <div class="card" style="width: 30rem;">
                                             <img src="recursos/representante.jpg" class="card-img-top" alt="imagen ilustrativa de representante">
                                             <div class="card-body">
                                                <h4 class="card-title cardTitle">${representante.name}</h4>
                                                <p class="card-text">Email: ${representante.email}</p>
                                                <p class="card-text">Web Site: ${representante.website}</p>
                                                <p class="card-text">Teléfono: ${representante.phone}</p>
                                                <h4 class="card-text">Gracias por elegirnos. Lo contactaremos a la brevedad</h4>
                                            </div>
                                        </div>
                                    </div>`
                                    contenedor.innerHTML += ficha
                                });
                            }

                            let finalizar = document.getElementById('finalizar');
                            finalizar.onclick = () => {

                                fetch('https://jsonplaceholder.typicode.com/users')
                                    .then((response) => response.json())
                                    .then((data) => {
                                        crearHtml(filtrar(data));
                                    })
                            }
                        }
                    }
                })
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

    limpiarInicio()

    let contenedor = document.getElementById(`contenedor`);

    nuevoCliente = document.createElement('div');
    nuevoCliente.innerHTML = `
    <div id="section2" class="titulo subtitulo"><h3>Por favor ingrese sus datos para crear un usuario:</h3>
        <form class="container" action="#" method="post">
            <div class="form">
                <label for="nombre">Ingrese su nombre y apellido:</label>
                <input id="usuario" type="text" class="form-control" placeholder="Nombre Apellido" required>
                <label for="telefono">Ingrese un teléfono de contacto:</label>
                <input id="telefono" type="number" class="form-control" placeholder="1112345678" required>
                <label for="nombreUsuario">Cree un nombre de usuario:</label>
                <input id="nombreUsuario" type="text" class="form-control" placeholder="juan01" required>
                <label for="contrasenia">Cree una contraseña:</label>
                <input id="contrasenia" type="password" class="form-control" placeholder="********" required>
                <div>
                    <button id="ingreso" type="submit" class="btn btn-primary">Crear</button>
                </div>
            </div>
        </form>
    </div>`;

    contenedor.append(nuevoCliente);

    ingreso = document.getElementById('ingreso');

    ingreso.onclick = (evento) => {

        let name = document.getElementById('usuario');
        let tel = document.getElementById('telefono');
        let nameUsuario = document.getElementById('nombreUsuario');
        let contrasenia = document.getElementById('contrasenia');

        if (name.value != '' && tel.value != '' && nameUsuario.value != '' && contrasenia.value != '') {

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
                text: cliente + ' su usuario fue creado con éxito, a continuación le mostramos los planes que podemos ofrecerle:',
                duration: 4000,
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
            ${tarjeta.plan}: Límite de extracción por cajero automático: $${tarjeta.limiteExtraccion}. Límite para compra en un pago: $${tarjeta.limiteCompra}. Límite para compra en cuotas: $${tarjeta.limiteCuotas}. ${tarjeta.descripcion}
            </div>`;

                contenedor.append(plan1);
            }

            boton = document.createElement('div');
            boton.className = 'titulo subtitulo';
            boton.innerHTML = `
            <div>Seleccione el plan de su interés:</div>
            <div id="botones">
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
            <img id="img1" class="imgTarjeta" src="recursos/basico.png" alt="JavaScript">
            `
                contenedor.append(titulo);
            }

            let platino = document.getElementById('platino');

            platino.onclick = () => {

                contenedor.innerHTML = ``;

                let titulo = document.createElement('h3');
                titulo.innerHTML = `<h3 class="titulo">Plan elegido: Platino</h3>
            <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
            <img id="img1" class="imgTarjeta" src="recursos/platino.png" alt="JavaScript">`

                contenedor.append(titulo);
            }

            let dorado = document.getElementById('dorado');

            dorado.onclick = () => {

                contenedor.innerHTML = ``;

                let titulo = document.createElement('h3');
                titulo.innerHTML = `<h3 class="titulo">Plan elegido: Dorado</h3>
                <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
                <img id="img1" class="imgTarjeta" src="recursos/dorado.png" alt="JavaScript">`

                contenedor.append(titulo);
            }

            let black = document.getElementById('black');

            black.onclick = () => {

                contenedor.innerHTML = ``;

                let titulo = document.createElement('h3');
                titulo.innerHTML = `<h3 class="titulo">Plan elegido: Black</h3>
            <h2 class="subtitulo">Muchas gracias por elegirnos, en un momento un representante se pondrá en contacto con usted al: ${telefono}. Saludos. </h2>
                    <img id="img1" class="imgTarjeta" src="recursos/black.png" alt="JavaScript">`

                contenedor.append(titulo);
            }
        } else {

            Toastify({
                text: 'Faltan datos obligatorios',
                duration: 1500,
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
    }
}

noCliente.onclick = (prevent) => {

    prevent.preventDefault();

    limpiarInicio()

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
            <input value="20000" class="form-check-input radio" type="radio" name="flexRadioDefault">
            <label class="form-check-label" for="radio">
              $20000
            </label>
          </div>
          <div class="form-check">
            <input value="50000" class="form-check-input radio" type="radio" name="flexRadioDefault">
            <label class="form-check-label" for="radio2">
              $50000
            </label>
          </div>
          <div class="form-check">
            <input value="80000" class="form-check-input radio" type="radio" name="flexRadioDefault">
            <label class="form-check-label" for="radio3">
              $80000
            </label>
          </div>
          <div class="form-check">
            <input value="100000" class="form-check-input radio" type="radio" name="flexRadioDefault">
            <label class="form-check-label" for="radio3">
              $1000000
            </label>
          </div>
          </form>
          </div>`

    contenedor.prepend(titulo);

    function minMax() {

        const cuotasDisponibles = [1, 3, 6, 9, 12];

        let min = Math.min(...cuotasDisponibles);

        let max = Math.max(...cuotasDisponibles);

        let cuotas = document.createElement('div');
        cuotas.className = 'subtitulo';
        cuotas.innerHTML = `<div id="cuotasId">
            <form class="container" action="#" method="post" id="cuotasId">
            <div class="form">
            <label for="cuotasCantidad">Sabiendo que la cantidad mínima de cuotas es ${min} y la máxima ${max} por favor ingrese en cuantas cuotas le gustaría saldar su deuda:</label>
            <input id="cuotasCantidad" type="text" class="form-control" placeholder="1, 2, 3...">
            <button id="cuotasBoton" type="submit" class="btn btn-primary">Cuotas</button>
            </form>
            </div>
            </div>`;

        contenedor.prepend(cuotas);
    }

    let radioButtons = document.getElementsByClassName('radio');

    for (let button of radioButtons) {

        button.addEventListener('click', (valor) => {

            let radioNoCliente = document.getElementById('radioNoCliente');
            radioNoCliente.remove();
            let seleccionado = valor.target.value;
            let resultado = porcentajePrestamo(parseInt(seleccionado), tasaInteres);

            let contenedor = document.getElementById('contenedor');

            let titulo = document.createElement('div');
            titulo.innerHTML = `<div  id="total"><h3 class="titulo subtitulo">Su total a pagar será de $${resultado}</h3>
            <button id="cuotas" type="submit" class="btn btn-primary">Cuotas</button></div>`

            contenedor.append(titulo);

            let botonCuotas = document.getElementById('cuotas');

            botonCuotas.onclick = () => {

                let total = document.getElementById('total');
                total.remove();

                minMax()

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

                    function cuotasFunction() {

                        const disponibleCuota = JSON.stringify(filtro.cuotas);
                        const disponiblePrecio = JSON.stringify(filtro.totalCadaCuota);

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
                        fin.innerHTML = `<div class="subtitulo">
                        Gracias por elegirnos, por favor ingrese los siguientes datos para que un representante se ponga en contacto con usted:
                        <form class="container" action="#" method="post">
                        <div class="form">
                            <label for="nombre">Nombre y apellido:</label>
                            <input id="nombre" type="text" class="form-control" placeholder="Nombre Apellido" required>
                            <label for="telefono">Teléfono:</label>
                            <input id="telefono" type="number" class="form-control" placeholder="1112345678" required>
                            <label for="nombreUsuario">Email</label>
                            <input id="email" type="email" class="form-control" placeholder="ejempl@gmail.com" required>
                            <div>
                                <button id="contacto" type="submit" class="btn btn-primary">Contactarme</button>
                            </div>
                        </div>
                    </form>
                        </div>`;
                        contenedor.append(fin);

                        let contactame = document.getElementById('contacto');

                        contactame.onclick = () => {

                            let name = document.getElementById('nombre');
                            let tel = document.getElementById('telefono');
                            let email = document.getElementById('email');

                            if (name.value != '' && tel.value != '' && email.value != '') {

                                let nombreNoCliente = document.getElementById('nombre').value;
                                let telefonoNoCliente = document.getElementById('telefono').value;
                                let emailNoCliente = document.getElementById('email').value;

                                const datos = {
                                    nombre: nombreNoCliente,
                                    telefono: telefonoNoCliente,
                                    email: emailNoCliente
                                }

                                let { nombre, telefono, email } = datos

                                contenedor.innerHTML = ``;

                                let contacto = document.createElement('div');
                                contacto.innerHTML = `
                            <div class="subtitulo">
                                <div class="cardTitle">${nombre} un representante se pondrá en contacto con usted a los medios proporcionados: </div>
                            </div>
                            <div class="subtitulo">
                                <div>Teléfono: ${telefono}</div>
                                <div>Email: ${email}</div>
                                <div>Saludos</div>
                            </div>`;
                                contenedor.append(contacto);

                            }

                            else {

                                Toastify({
                                    text: 'Faltan datos obligatorios',
                                    duration: 1500,
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
                        }
                    }
                }
            }
        });
    }
}





