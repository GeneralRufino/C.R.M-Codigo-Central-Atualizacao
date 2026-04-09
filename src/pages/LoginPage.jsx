import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  // NOVO: Estado para controlar se a senha está visível ou não (começa falsa)
  const [showSenha, setShowSenha] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Acessando C.R.M. Core com:", { usuario, senha });
    navigate('/dashboard');
  };

  // NOVO: Função para alternar a visibilidade da senha
  const toggleShowSenha = () => {
    setShowSenha(!showSenha); // Inverte o valor booleano
  };

  return (
    <main className="login-wrapper">
      <div className="login-card">
        
        <header className="login-header">
          <div className="logo-container">
            <img src="/assets/logo-batmotor.png" alt="Batmotor Logo" />
            <h1>BATMOTOR</h1>
            <span>Motores e Baterias</span>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            {/* IMPLEMENTAÇÃO: Ícone do Usuário */}
            <span className="input-icon">
              <i className="fi fi-ss-user"></i>
            </span>
            <input 
              type="text" 
              placeholder="USUÁRIO" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            {/* IMPLEMENTAÇÃO: Ícone do Cadeado */}
            <span className="input-icon">
              <i className="fi fi-sr-lock"></i>
            </span>
            <input 
              // LÓGICA DO OLHO: Mudar dinamicamente o type do input
              type={showSenha ? 'text' : 'password'} 
              placeholder="SENHA" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            
            {/* IMPLEMENTAÇÃO: Botão Clicável do Olho */}
            {/* Lembre-se de verificar as classes corretas dos ícones na lib que usam */}
            <button 
              type="button" 
              className="toggle-password" 
              onClick={toggleShowSenha} // Chama a função ao clicar
              tabIndex="-1" // Impede que o foco do teclado (Tab) pare no botão
            >
              {/* LÓGICA DO OLHO: Mudar o ícone baseada no estado showSenha */}
              {showSenha ? (
                <i className="fi fi-rr-eye"></i> // Ícone Olho Aberto (exemplo)
              ) : (
                <i className="fi fi-rr-eye-crossed"></i> // Ícone Olho Fechado (exemplo)
              )}
            </button>
          </div>

          <button type="submit" className="btn-entrar">
            Entrar
          </button>
        </form>

      </div>
    </main>
  );
}

export default LoginPage;