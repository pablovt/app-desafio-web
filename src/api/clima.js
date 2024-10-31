import axios from 'axios';
import { getToken } from './auth';

const API_URL = process.env.REACT_APP_API_URL;

export const consultaClima = async (cidade) => {
  try {
    const response = await axios.get(`${API_URL}/api/clima`, {
      params: {
        city_name: cidade,
      },
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar dados de clima:', error);
    throw new Error('Erro ao buscar dados de clima. Verifique a chave de API e a cidade informada.');
  }
};
