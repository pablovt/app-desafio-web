import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigateToLivroList = () => {
    navigate('/livros');
  };

  const navigateToWeather = () => {
    navigate('/clima/view');
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
          Sair
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={navigateToLivroList}
          className="bg-blue-500 text-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-700"
        >
          <h3 className="text-2xl font-semibold mb-2">Gerenciar Livros</h3>
          <p className="text-white">Acesse a lista completa de livros e gerencie os registros.</p>
        </button>

        <button
          onClick={navigateToWeather}
          className="bg-green-500 text-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-green-700"
        >
          <h3 className="text-2xl font-semibold mb-2">Informações do Clima</h3>
          <p className="text-white">Veja as informações meteorológicas mais recentes.</p>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
