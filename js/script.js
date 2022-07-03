

alert("Bienvenido a centro de adopción de mascotas");
let contraseña = "entrar01";

for (let i = 2; i >= 0; i--) {
  let ingreso = prompt("Ingresá tu contraseña");
  if (contraseña == ingreso) {
    alert("Bienvenido/a");

    let edad = prompt("Por favor ingresá tu edad:");

    while (edad < 18) {
      alert("No podés adoptar un animal siendo menor de 18 años, lo siento");
      edad = prompt("Por favor ingresá tu edad:");
    }

    let pedido = prompt(
      "Por favor elegí que animal queres adoptar:\n1. Perro \n2. Gato \n3. Conejo"
    );

    switch (pedido) {
      case "1":
        alert(
          "Has adoptado un perrito llamado Rocko, pronto llegará a su nuevo hogar"
        );
        break;
      case "2":
        alert(
          "Has adoptado un gatito llamado Pepe, pronto llegará a su nuevo hogar"
        );
        break;
      case "3":
        alert(
          "Has adoptado un conejito llamado Julio, pronto llegará a su nuevo hogar"
        );
        break;
      default:
        alert("Lo siento, el número elegido no es correcto");
        break;
    }
    break;
  } else {
    alert(
      "Tu contraseña es incorrecta, te quedan " +
      i +
      " intentos"
    );
  }
}
