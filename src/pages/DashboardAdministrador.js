import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'; // Importando o gráfico de barras
import './FuncionarioDashboard.css';

function FuncionarioDashboard() {
  const [nome, setNome] = useState('');
  const [currentSection, setCurrentSection] = useState('statistics'); // Controla a seção visível

  useEffect(() => {
    const nomeUsuario = localStorage.getItem('usuario');
    if (nomeUsuario) {
      setNome(nomeUsuario);
    }
  }, []);

  const registros = [
    { data: '12/01/2025', entrada: '08:00', saida: '17:00', horas: '8h' },
    { data: '11/01/2025', entrada: '08:30', saida: '17:15', horas: '7h 45min' },
    // Adicione mais registros aqui
  ];

  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Horas Trabalhadas',
        data: [8, 7.5, 8, 8, 7, 0, 0],
        backgroundColor: 'rgba(255, 183, 77, 0.8)', // Barras amarelas
        borderColor: '#FFB74D',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  };

  return (
    <div className="func-dashboard-container">
      <header className="dashboard-header">
        <h2>Bem-vindo, {nome}</h2>
        <p>Veja aqui suas horas trabalhadas e histórico de pontos.</p>
      </header>

      <div className="dashboard-content">
        {/* Barra lateral de navegação */}
        <div className="sidebar">
          <button className="sidebar-btn" onClick={() => setCurrentSection('statistics')}>
            Estatísticas
          </button>
          <button className="sidebar-btn" onClick={() => setCurrentSection('history')}>
            Histórico de Pontos
          </button>
          <button className="sidebar-btn" onClick={() => setCurrentSection('punch')}>
            Batimento de Ponto
          </button>
        </div>

        {/* Seção de estatísticas (gráfico de horas trabalhadas) */}
        {currentSection === 'statistics' && (
          <section className="chart-section">
            <h3>Horas Trabalhadas - Última Semana</h3>
            <div className="chart-container">
              <Bar data={data} options={options} />
            </div>
          </section>
        )}

        {/* Seção de histórico de pontos */}
        {currentSection === 'history' && (
          <section className="history-section">
            <h3>Histórico de Pontos</h3>
            <table className="points-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Entrada</th>
                  <th>Saída</th>
                  <th>Total de Horas</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((registro, index) => (
                  <tr key={index}>
                    <td>{registro.data}</td>
                    <td>{registro.entrada}</td>
                    <td>{registro.saida}</td>
                    <td>{registro.horas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Seção de batimento de ponto */}
        {currentSection === 'punch' && (
          <section className="punch-section">
            <button className="btn-batimento">Bater Ponto</button>
          </section>
        )}
      </div>
    </div>
  );
}

export default FuncionarioDashboard;