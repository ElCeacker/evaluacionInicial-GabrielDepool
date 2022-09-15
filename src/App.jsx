
import PropTypes from 'prop-types';
const App = (name, surname) => {
  const saludo = 'Hola Pepe';
  const edad = 35;
  const dias = [1, 2, 3, 4, 5, 6];
  const casado = true;
  const alumno = { nombre: 'Jose', edad : 35};


  return (
    <>
      <h1>Hello World</h1>
      <p>String: {saludo}</p>
      <p>Numérica: {edad}</p>
      <p>Array: {dias}</p>

      <p>Boolean: {casado.toString()}</p>
      <p>Object: {JSON.stringify(alumno, null, 5)}</p>
      <p>Atributo de un Object: {alumno.nombre}</p>
    </>
  );
};

App.protoTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}


export default App;
