import React from 'react';
import usuarios from '../../public/users.json';
import '../components/MetasUsuario.css';

const MetasUsuario = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full mt-2">
      <div>
        <h1 className="text-shadow ml-14 font-normal">Metas y objetivos</h1>
      </div>
      <hr className="w-full mt-1" style={{ borderTop: '1px solid #9747ff' }} />
      <div className="ml-6 mt-1">
        <table className="table-auto">
          <thead>
            <tr className="pb-2 shadow-sm rounded-md ">
              <th></th>
              <th>Nombre completo</th>
              <th>Correo electrónico</th>
              <th>Última conexión</th>
              <th>Fecha postulación</th>
              <th className="w-40">Verificación</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>
                  {' '}
                  <input
                    type="checkbox"
                    className="mr-1 align-middle size-3 checkbox "
                  />{' '}
                </td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td className="relative">
                  <div
                    className={`estado-conexion ${calcularColorConexion(user.ultimaConexion)}`}
                  ></div>
                  {calcularTiempo(user.ultimaConexion)}
                </td>
                <td>{formatearFecha(user.fechaPostulacion)}</td>
                <td>
                  <div className="barra-verificacion bg-gray-400 h-1.5 w-full relative">
                    <div
                      className={`barra-progreso ${calcularColorVerificacion(user.verificacion)} h-full`}
                      style={{
                        width: calcularAnchoVerificacion(user.verificacion),
                        borderRadius: calcularBordeRedondeado(
                          user.verificacion,
                        ), // Ajusta esta función para calcular el borde redondeado
                      }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Función para calcular el tiempo transcurrido desde la última conexión
const calcularTiempo = (fecha) => {
  const ahora = new Date();
  const fechaConexion = new Date(fecha);
  const diferenciaMs = ahora - fechaConexion;
  const segundos = Math.floor(diferenciaMs / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 0) {
    return `Hace ${dias} día${dias === 1 ? '' : 's'}`;
  } else if (horas > 0) {
    return `Hace ${horas} hora${horas === 1 ? '' : 's'}`;
  } else if (minutos > 0) {
    return `Hace ${minutos} minuto${minutos === 1 ? '' : 's'}`;
  } else {
    return 'Hace unos segundos';
  }
};
const calcularColorConexion = (ultimaConexion) => {
  const ahora = new Date();
  const fechaConexion = new Date(ultimaConexion);
  const diferenciaMs = ahora - fechaConexion;
  const diferenciaHoras = diferenciaMs / (1000 * 60 * 60);
  return diferenciaHoras < 48 ? 'max progress' : 'conexion antigua';
};

const formatearFecha = (fecha) => {
  const [day, month, year] = fecha.split('/'); // Separar la cadena por '/'
  const formattedDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`; // Formatear la fecha como "DD/MM/AAAA"
  return formattedDate;
};

// Función para calcular el color de la barra de verificación
const calcularColorVerificacion = (progreso) => {
  if (progreso >= 5) {
    return 'max progress';
  } else if (progreso >= 3) {
    return 'medium progress';
  } else {
    return 'min progress';
  }
};

const calcularBordeRedondeado = (progreso) => {
  return progreso >= 5 ? '0' : '0.5rem'; // Aplicar bordes redondeados solo cuando no está al 100%
};

const calcularAnchoVerificacion = (progreso) => {
  let ancho = 0;

  // Calcular el ancho de la barra de progreso en función del progreso de verificación
  if (progreso >= 5) {
    ancho = 100;
  } else {
    ancho = progreso * 20;
  }

  return `${ancho}%`;
};

export default MetasUsuario;
