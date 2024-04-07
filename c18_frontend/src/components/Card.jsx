import PropTypes from 'prop-types';

const Card = ({ titulo, number }) => {
    return (
        <div className="bg-purple-100 rounded-lg p-2 pb-10 shadow-md text-center w-full">
            <div className="bg-purple-700 rounded-lg p-2 shadow-md">
                <h1 className="text-white">{titulo}</h1>
            </div>
            <div className="rounded-b-lg p-4 flex justify-center items-center bg-purple-100">
                <span className="text-6xl text-purple-700">{number}</span>
            </div>
        </div>
    )
}
Card.propTypes = {
    titulo: PropTypes.string.isRequired, // Espera que `titulo` sea una cadena y es requerida
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired // Espera que `number` sea una cadena o un número y es requerida
};
export default Card