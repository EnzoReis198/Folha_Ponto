import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashboardFuncionario from './pages/FuncionarioDashboard';
import DashboardAdministrador from './pages/DashboardAdministrador';
import RegistroPonto from './pages/RegistroPonto';
import Relatorios from './pages/Relatorios';
import CadastroFuncionario from './pages/CadastroFuncionario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionario/dashboard" element={<DashboardFuncionario />} />
        <Route path="/admin/dashboard" element={<DashboardAdministrador />} />
        <Route path="/registro-ponto" element={<RegistroPonto />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
      </Routes>
    </Router>
  );
}

export default App;
