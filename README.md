# Projeto de Login Full-Stack (React + FastAPI)

Este é um projeto de tarefa que implementa um sistema de registro e login de usuários
com um frontend em React (Vite) e um backend em FastAPI (com SQLAlchemy).

## Tecnologias Utilizadas

* **Frontend**: React.js (com Vite) e Axios
* **Backend**: FastAPI e Uvicorn
* **Banco de Dados**: SQLAlchemy (com SQLite)
* **Segurança**: Passlib (para hash de senhas) e JWT (para tokens)

---

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto, você precisará de dois terminais rodando
simultaneamente: um para o Backend e um para o Frontend.

**Pré-requisitos:**
* Node.js (versão 20.19+ ou 22.12+)
* Python (versão 3.10+)

---

### 1. Configurando o Backend (Terminal 1)

1.  Abra seu primeiro terminal e navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2.  Crie um ambiente virtual (venv):
    ```bash
    python3 -m venv venv
    ```

3.  Ative o ambiente virtual:
    * No macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
    * No Windows:
        ```bash
        venv\Scripts\activate
        ```

4.  Instale todas as dependências da "lista de compras" (`requirements.txt`):
    ```bash
    pip install -r requirements.txt
    ```

5.  Inicie o servidor FastAPI:
    ```bash
    uvicorn main:app --reload
    ```

✅ **Pronto!** O backend estará rodando em `http://127.0.0.1:8000`

---

### 2. Configurando o Frontend (Terminal 2)

1.  Abra um **segundo terminal** (mantenha o primeiro rodando!).

2.  Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

3.  Instale todas as dependências do Node:
    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento do React:
    ```bash
    npm run dev
    ```

✅ **Pronto!** O frontend estará rodando em `http://localhost:5173` (ou a porta que o Vite indicar).

---

### 3. Testando

Acesse `http://localhost:5173` no seu navegador. Você poderá registrar um novo usuário e fazer login.

Você também pode ver a documentação da API do backend em `http://127.0.0.1:8000/redoc`.