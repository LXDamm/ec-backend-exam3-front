import './Banner.scss';
import logo from '../assets/sinus-logo-landscape.svg';
import {
    Link
  } from "react-router-dom";

function Banner() {
    return (
        <div className="Banner">
            <div className="logo-container">
                <Link to="/start">
                    <picture>
                        <source srcSet={logo} />
                        <img src={logo} alt="Sinus Shop" />
                    </picture>
                </Link>
            </div>
        </div>
    );
}

export default Banner;
