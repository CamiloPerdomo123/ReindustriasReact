import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import LOGIN from './pages/usuarios/login';
import REINDUSTRIAS from './pages/reindustrias';

function AppContent() {
  const location = useLocation();

  // Rutas donde no quieres mostrar el Header y Footer
  const hideHeaderAndFooter = location.pathname === '/login';

  useEffect(() => {
    const titleMap = {
      '/home': 'Inicio',
      '/login': 'Login',
      '/reindustrias': 'Reindustrias',
    };

    document.title = titleMap[location.pathname] || 'Título por Defecto'; // Título por defecto
  }, [location]);

  return (
    <div>
      {!hideHeaderAndFooter && <Header />} {/* Muestra el Header si no estás en /login */}
      
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />  {/* Ruta para la página de inicio */}
          <Route path="/login" element={<LOGIN />} />  {/* Ruta para el Login */}
          <Route path="/reindustrias" element={<REINDUSTRIAS />} />  {/* Ruta para Reindustrias */}
          {/* Otras rutas */}
        </Routes>
      </main>
      {!hideHeaderAndFooter && <Footer />} {/* Muestra el Footer si no estás en /login */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
