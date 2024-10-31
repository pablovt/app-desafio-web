import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLivroById, updateLivro } from '../api/livro';

function LivroEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [livro, setLivro] = useState({
    titulo: '',
    descricao: '',
    autor: '',
    numeroPaginas: '',
    dataCadastro: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLivro = async () => {
      try {
        const data = await fetchLivroById(id);
        setLivro(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar o livro:", error);
      }
    };

    getLivro();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateLivro(id, livro);
      alert('Livro atualizado com sucesso!');
      navigate('/livros');
    } catch (error) {
      console.error("Erro ao atualizar o livro:", error);
      alert('Erro ao atualizar o livro. Tente novamente.');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Editar Livro</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input
            type="text"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Descrição</label>
          <textarea
            name="descricao"
            value={livro.descricao}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Autor</label>
          <input
            type="text"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Número de Páginas</label>
          <input
            type="number"
            name="numeroPaginas"
            value={livro.numeroPaginas}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Data de Cadastro</label>
          <input
            type="date"
            name="dataCadastro"
            value={livro.dataCadastro.split('T')[0]}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => navigate('/livros')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LivroEdit;
