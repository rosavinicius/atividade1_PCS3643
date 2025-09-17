
import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', {
        username: username,
        password: password
      });
      setMessage(`Usuário '${response.data.username}' registrado com sucesso!`);
      setIsError(false); 

    } catch (error) {
      setMessage('Erro: ' + error.response.data.detail);
      setIsError(true); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Novo Usuário</h2>
      <div>
        <label>Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrar</button>
      
        {message && (
        <p className={isError ? 'feedback-message error' : 'feedback-message success'}>
            {message}
        </p>
        )}    
    </form>
  );
}

export default Register;