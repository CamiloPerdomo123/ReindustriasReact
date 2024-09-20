import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.usernameOrEmail === "" || formData.password === "") {
      setError("Todos los campos son obligatorios");
    } else {
      try {
        const response = await fetch('http://localhost:8092/api/auth/iniciarSesion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Si el estado no es "ok" (200), maneja el error
        if (response.status === 400) {
          setError('Usuario no encontrado o Contraseña incorrecta');
          return;
        } else if (response.status === 401) {
          setError('Contraseña incorrecta');
          return;
        } else if (!response.ok) {
          throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        console.log("JWT recibido:", data.tokeDeAcceso);

        // Guardar el token con el tipo 'Bearer' en localStorage
        localStorage.setItem('token', `${data.tipoDeToken} ${data.tokeDeAcceso}`);

        // Redirigir a la página de inicio
        navigate('/home');
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted className="video-background">
        <source src="/video/001_video_reindustrias.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container className="login-form-container">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-4">Iniciar Sesión</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico o Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="usernameOrEmail"
                  placeholder="Ingresa tu correo o usuario"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
