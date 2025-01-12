import React, { useState } from 'react';
import './Login.css'; // Importando o arquivo de estilo

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login realizado');
  };

  return (
    <div className="login-container">
      <div className="img">
        <img src="/img/bg.svg" alt="Background" />
      </div>
      <div className="login-content">
        <img src="/pages/img/logo.jpeg" alt="Logo da Empresa"/>
        <h2 className="title">Bem-vindo à Algomais Folha de Ponto</h2>
        <form onSubmit={handleLogin}>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Usuário</h5>
              <input
                type="text"
                className="input"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Senha</h5>
              <input
                type="password"
                className="input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <a href=".">Esqueceu a senha?</a>
          <input type="submit" className="btn" value="Entrar" />
        </form>
      </div>
    </div>
  );
}

export default Login;
