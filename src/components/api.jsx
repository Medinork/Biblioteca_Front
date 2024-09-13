import axios from 'axios';

// Crie uma instância do Axios com a URL base
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL base da sua API backend
});

// Função para configurar o token no header
const setAuthToken = () => {
  // Recupera o token do localStorage
  const token = localStorage.getItem('token');
  
  // Se houver um token, configure o header Authorization
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Se não houver token, remova o header Authorization
    delete api.defaults.headers.common['Authorization'];
  }
};

// Adicione um interceptor para configurar o token em cada requisição
api.interceptors.request.use(
  (config) => {
    // Chama a função para garantir que o header Authorization esteja configurado
    setAuthToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// APIs definidas
export const livrosApi = {
  getAll: () => api.get('/livros'),
  getById: (id) => api.get(`/livros/${id}`),
  create: (livro) => api.post('/livros', livro),
  update: (id, livro) => api.put(`/livros/${id}`, livro),
  delete: (id) => api.delete(`/livros/${id}`),
};

export const usuariosApi = {
  getAll: () => api.get('/usuarios'),
  getById: (id) => api.get(`/usuarios/${id}`),
  update: (id, usuario) => api.put(`/usuarios/${id}`, usuario),
  delete: (id) => api.delete(`/usuarios/${id}`),
};

export const authApi = {
  login: (credentials) => api.post('/usuarios/login', credentials),
  registro: (credentials) => api.post('/usuarios/register', credentials),
};

export default api;
