// App.js o App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './componentes/login-doc';
import { Citas } from './componentes/citas';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/citas" element={<Citas />} />
      </Routes>
    </Router>
  );
}

export default App;
