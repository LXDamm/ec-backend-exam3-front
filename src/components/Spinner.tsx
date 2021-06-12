import svg from '../assets/loader.svg';

function Spinner() {
    return (
        <div className="Spinner">
            <img src={svg} alt="Hämtar data..."></img>
            <p>Loading...</p>
        </div>
    );
}

export default Spinner;
