import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL base da sua API
});

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
  create: (usuario) => api.post('/usuarios', usuario),
  update: (id, usuario) => api.put(`/usuarios/${id}`, usuario),
  delete: (id) => api.delete(`/usuarios/${id}`),
};

export default api;
