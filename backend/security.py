# backend/security.py
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import JWTError, jwt

# Configuração do "contexto" de hash de senha (usando bcrypt)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Segredos para o Token JWT (MUDE ISSO EM PRODUÇÃO!)
SECRET_KEY = "SUA_CHAVE_SECRETA_MUITO_SECRETA"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Função para verificar se a senha enviada bate com a senha no banco
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Função para "hashear" uma senha antes de salvar no banco
def get_password_hash(password):
    return pwd_context.hash(password)

# Função para criar um novo Token de Acesso (JWT)
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt