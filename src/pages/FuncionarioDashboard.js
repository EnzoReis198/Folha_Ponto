import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaChartBar, FaHistory, FaClock, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './FuncionarioDashboard.css';

// Registrar as escalas necessárias no Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function FuncionarioDashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Controle da visibilidade da barra lateral
  const [activeSection, setActiveSection] = useState('estatisticas'); // Controlar a seção ativa
  
  const registros = [
    { data: '12/01/2025', entrada: '08:00', saida: '17:00', horas: '8h' },
    { data: '11/01/2025', entrada: '08:30', saida: '17:15', horas: '7h 45min' },
    // Adicione mais registros aqui
  ];

  // Dados para o gráfico de barras
  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Horas Trabalhadas',
        data: [8, 7.5, 8, 8, 7, 0, 0], // Dados fictícios para cada dia da semana
        backgroundColor: 'rgba(60, 90, 153, 0.7)', // Azul escuro suave
        borderColor: '#3c5a99',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Função para alternar a visibilidade da barra lateral
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="func-dashboard-container">
      {/* Barra lateral */}
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <button className="sidebar-btn" onClick={() => setActiveSection('estatisticas')}>
          <FaChartBar /> Estatísticas
        </button>
        <button className="sidebar-btn" onClick={() => setActiveSection('historico')}>
          <FaHistory /> Histórico
        </button>
        <button className="sidebar-btn" onClick={() => setActiveSection('batimento')}>
          <FaClock /> Batimento de Ponto
        </button>
        <button className="sidebar-btn close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>

      {/* Setinha para mostrar/ocultar a barra lateral */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Bem-vindo, Funcionário</h2>
          <p>Veja aqui suas horas trabalhadas e histórico de pontos.</p>
        </header>

        <div className="section-content">
          {activeSection === 'estatisticas' && (
            <section className="chart-section">
              <h3>Horas Trabalhadas - Última Semana</h3>
              <div className="chart-container">
                <Bar data={data} options={options} />
              </div>
            </section>
          )}

          {activeSection === 'historico' && (
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

          {activeSection === 'batimento' && (
            <section className="batimento-section">
              <h3>Batimento de Ponto</h3>
              <button className="batimento-btn">Bater Ponto</button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default FuncionarioDashboard;
