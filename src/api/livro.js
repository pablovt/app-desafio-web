import axios from 'axios';
import { getToken } from './auth';

const API_URL = process.env.REACT_APP_API_URL + '/api/livros';

const authHeader = () => ({
  headers: {
    'Authorization': `Bearer ${getToken()}`,
  },
});

// Obter todos os livros
export const fetchLivros = async () => {
  const response = await axios.get(API_URL, authHeader());
  return response.data;
};

// Obter um livro por ID
export const fetchLivroById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, authHeader());
  return response.data;
};

// Criar um novo livro
export const createLivro = async (livro) => {
  const response = await axios.post(API_URL, livro, authHeader());
  return response.data;
};

// Atualizar um livro por ID
export const updateLivro = async (id, livro) => {
  const response = await axios.put(`${API_URL}/${id}`, livro, authHeader());
  return response.data;
};

// Excluir um livro por ID
export const deleteLivro = async (id) => {
  await axios.delete(`${API_URL}/${id}`, authHeader());
};
