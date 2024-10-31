import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLivroById } from '../api/livro';

function LivroView() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getLivro = async () => {
      try {
        const data = await fetchLivroById(id);
        setLivro(data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do livro:', error);
        alert('Erro ao carregar os detalhes do livro.');
      } finally {
        setLoading(false);
      }
    };

    getLivro();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!livro) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Detalhes do Livro</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">ID</label>
          <p className="p-3 bg-gray-100 rounded">{livro.id}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <p className="p-3 bg-gray-100 rounded">{livro.titulo}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Autor</label>
          <p className="p-3 bg-gray-100 rounded">{livro.autor}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Descrição</label>
          <p className="p-3 bg-gray-100 rounded">{livro.descricao}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Número de Páginas</label>
          <p className="p-3 bg-gray-100 rounded">{livro.numeroPaginas}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Data de Cadastro</label>
          <p className="p-3 bg-gray-100 rounded">
            {new Date(livro.dataCadastro).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => navigate('/livros')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Voltar
          </button>
          <button
            onClick={() => navigate(`/livros/edit/${livro.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LivroView;
