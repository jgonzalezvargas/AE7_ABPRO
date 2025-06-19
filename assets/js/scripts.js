document.addEventListener('DOMContentLoaded', () => {
  // 1) Obtenemos el formulario por su ID
  const form = document.getElementById('repair-form');
  if (!form) return; // Si no existe, salimos

  // 2) Escuchamos el evento submit
  form.addEventListener('submit', e => {
    e.preventDefault(); // Evita que la página se recargue

    // 3) Recogemos los valores de los campos
    const cliente     = document.getElementById('cliente').value.trim();
    const tipo        = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const datetime    = document.getElementById('fecha').value;          // valor "YYYY-MM-DDThh:mm"
    const tarjeta     = document.getElementById('tarjeta').value.trim();
    const titular     = document.getElementById('titular').value.trim();
    const cvv         = document.getElementById('cvv').value.trim();

    // 4) Separamos fecha y hora si vienen completas
    let fecha = '', hora = '';
    if (datetime) {
      [fecha, hora] = datetime.split('T');
    }

    // 5) Validación básica: cliente, tipo y datetime son obligatorios
    if (!cliente || !tipo || !datetime) {
      alert('❗ Por favor completa Nombre, Tipo de reparación y Fecha/Hora.');
      return;
    }

    // 6) Simulación de envío de datos (aquí podrías usar fetch a tu API)
    console.log({
      cliente,
      tipo,
      descripcion,
      fecha,
      hora,
      tarjeta,
      titular,
      cvv
    });

    // Mostramos un resumen al usuario
    alert(
      `✅ Solicitud recibida:\n` +
      `- Cliente: ${cliente}\n` +
      `- Servicio: ${tipo}\n` +
      `- Fecha: ${fecha}\n` +
      `- Hora: ${hora}`
    );

    // 7) Demoramos un segundo antes de limpiar el formulario
    setTimeout(() => {
      form.reset();
    }, 1000); // 1000 ms = 1 segundo
  });
});
