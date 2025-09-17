// frontend/src/App.jsx

import React, { useState } from 'react';
import Login from './Login';       
import Register from './Register'; 

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="App">
      {isLoginView ? <Login /> : <Register />}

      <hr /> 

      <button className="toggle-btn" onClick={() => setIsLoginView(!isLoginView)}>
          {isLoginView ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça o login'}
      </button>
    </div>
  );
}

export default App;