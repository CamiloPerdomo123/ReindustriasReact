import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Header.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="imagenes/01_reindustrias_logo.png" alt="Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item dropdown">
              <a className="nav-link" role="button" data-toggle="dropdown" aria-expanded="false">
                Vehículos
              </a>
              <div className="dropdown-menu dropdown-cars">
                <div className="dropdown-car-container">
                  <img src="imagenes/01_reindustrias_logo.png" alt="Volkswagen" className="dropdown-car-img" />
                  <p>Volkswagen</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="imagenes/01_reindustrias_logo.png" alt="Honda" className="dropdown-car-img" />
                  <p>Honda</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="imagenes/01_reindustrias_logo.png" alt="Fiat" className="dropdown-car-img" />
                  <p>Fiat</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="ruta/jeep.png" alt="Jeep" className="dropdown-car-img" />
                  <p>Jeep</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="ruta/hyundai.png" alt="Hyundai" className="dropdown-car-img" />
                  <p>Hyundai</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="ruta/jac.png" alt="Jac" className="dropdown-car-img" />
                  <p>Jac</p>
                </div>
                <div className="dropdown-car-container">
                  <img src="ruta/ram.png" alt="Ram" className="dropdown-car-img" />
                  <p>Ram</p>
                </div>
              </div>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="#">Registro Clientes</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Vitrinas & Talleres</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Cita Taller</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Llantas X Mayor</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Serviteca</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Targeta Virtual</a>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Button variant="outline-success" onClick={handleLogin} className="my-2 my-sm-0">
              Iniciar Sesión
            </Button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
