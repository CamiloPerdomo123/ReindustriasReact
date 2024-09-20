import React, { useEffect, useState } from 'react';
//import './Home.css';

const Home = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    // Aquí llamaremos a la API del backend para obtener los vehículos
    // fetch('http://localhost:8080/api/vehiculos')
    //   .then(response => response.json())
    //   .then(data => setVehiculos(data));
  }, []);

  return (
    <div>
    <br></br>
        
    <br></br>
        
    <br></br>
        <h1>fdsds</h1>
    <br></br>
        
    <br></br>
        
    <br></br>
    </div>
  );
};

export default Home;