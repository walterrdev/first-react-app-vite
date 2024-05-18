// Importar PropTypes: Sirven para establecer restricciones de uso a nuestro componente. Ej: El tipo (string, number, etc) de la propiedad.
import PropTypes from 'prop-types';

/**
 * Componente funcional FirstApp
 * 
 * Se encarga de pintar en la vista el texto (Título y subtitulo) enviado desde el componente.
 * 
 * @param {String} title | Título a mostrar en la vista.
 * @param {String} subtitulo | Subtitulo a mostrar en la vista.
 * @param {String} paragram | Párrafo a mostrar en la vista.
 * @returns 
 */
export const FirstApp = ({ title, subTitle, paragram = 'El párrafo está vacío, por favor envíe uno al componente.' }) => {

    return (
        <>
            <h1>{ title }</h1>
            <h4>{ subTitle }</h4>
            <p>{ paragram }</p>
        </>
    );
}

/**
 * Establecer restricciones de uso para el componente.
 * 
 * Todas las propiedades deben de ser de tipo String.
 * Las propiedades title y paragram son obligatorias.
 * El subTitle es opcional y tiene valor por dejecto.
 */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    paragram: PropTypes.string.isRequired,
}

