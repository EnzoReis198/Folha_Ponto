import React, { useState } from 'react';
import './Login.css'; // Importando o arquivo de estilo

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [error, setError] = useState(''); // Estado para mensagens de erro

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpa qualquer erro anterior

    // Lógica de autenticação
    if (isAdmin && adminCode === '12345') {
      console.log('Administrador logado:', { usuario, senha });
      // Aqui, você pode redirecionar para o painel de admin
    } else if (!isAdmin) {
      console.log('Funcionário logado:', { usuario, senha });
      // Aqui, você pode redirecionar para o painel de funcionário
    } else {
      setError('Código de administrador incorreto'); // Mensagem de erro
    }
  };

  return (
    <div className="login-container">
      <div className="img">
        <img src="/img/back.webp" alt="Background" />
      </div>
      <div className="login-content">
        <img src="/img/logo.jpeg" alt="Logo da Empresa" />
        <h2 className="title">Bem-vindo à Algomais Folha de Ponto</h2>

        {/* Botões para selecionar o tipo de usuário */}
        <div className="user-selection">
          <button className="btn func-btn" onClick={() => setIsAdmin(false)}>
            Funcionário
          </button>
          <button className="btn adm-btn" onClick={() => setIsAdmin(true)}>
            Administrador
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <label htmlFor="usuario" className="label">
                Usuário
              </label>
              <input
                id="usuario"
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
              <label htmlFor="senha" className="label">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className="input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          {isAdmin && (
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-key"></i>
              </div>
              <div className="div">
                <label htmlFor="adminCode" className="label">
                  Código de Administrador
                </label>
                <input
                  id="adminCode"
                  type="text"
                  className="input"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Exibe mensagem de erro, se houver */}
          {error && <p className="error-message">{error}</p>}

          <a href="/recuperar-senha" className="link">
            Esqueceu a senha?
          </a>
         <input type="submit" className="btn" value="Entrar" />
        </form>
      </div>
    </div>
  );
}

export default Login;
