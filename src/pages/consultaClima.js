import React, { useState } from 'react';
import { consultaClima } from '../api/clima';

const ConsultaClima = () => {
  const [cidade, setCidade] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handlePesquisa = async () => {
    setError(null);
    try {
      const dadosClima = await consultaClima(cidade);
      setResultado(dadosClima);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  
  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Consultar Clima por Cidade</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cidade</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Informe o nome da cidade"
          />
        </div>
        <button
          onClick={handlePesquisa}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Consultar
        </button>
      </div>

      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}

      {resultado && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Resultado</h3>
          <p><strong>Nome da cidade:</strong> {resultado.city_name}</p>
          <p><strong>Temperatura:</strong> {resultado.temp}°C</p>
          <p><strong>Descrição:</strong> {resultado.description}</p>
          <p><strong>Umidade:</strong> {resultado.humidity}%</p>
          <p><strong>Velocidade do vento:</strong> {resultado.wind_speedy}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultaClima;
