import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLivros, deleteLivro } from '../api/livro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function LivroList() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getLivros = async () => {
      const data = await fetchLivros();
      setLivros(data || []);
      setLoading(false);
    };

    getLivros();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este livro?')) {
      try {
        await deleteLivro(id);
        setLivros(livros.filter((livro) => livro.id !== id));
        alert('Livro deletado com sucesso!');
      } catch (error) {
        console.error('Erro ao deletar o livro:', error);
        alert('Erro ao deletar o livro. Tente novamente.');
      }
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Lista de Livros</h2>
        <button
          onClick={() => navigate('/livros/create')}
          className="bg-blue-500 text-white py-2 px-4 rounded flex items-center hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Novo Cadastro
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-3 px-5">ID</th>
            <th className="text-left p-3 px-5">Título</th>
            <th className="text-left p-3 px-5">Descrição</th>
            <th className="text-left p-3 px-5">Autor</th>
            <th className="text-left p-3 px-5">Páginas</th>
            <th className="text-left p-3 px-5">Data de Cadastro</th>
            <th className="text-center p-3 px-5">Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id} className="border-b hover:bg-gray-100">
              <td className="p-3 px-5">{livro.id}</td>
              <td className="p-3 px-5">{livro.titulo}</td>
              <td className="p-3 px-5">{livro.descricao}</td>
              <td className="p-3 px-5">{livro.autor}</td>
              <td className="p-3 px-5">{livro.numeroPaginas}</td>
              <td className="p-3 px-5">{new Date(livro.dataCadastro).toLocaleDateString()}</td>
              <td className="p-3 px-5 flex justify-center space-x-3">
                <button
                  onClick={() => navigate(`/livros/view/${livro.id}`)}
                  className="text-gray-500 hover:text-blue-500"
                  title="Visualizar"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  onClick={() => navigate(`/livros/edit/${livro.id}`)}
                  className="text-gray-500 hover:text-green-500"
                  title="Editar"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(livro.id)}
                  className="text-gray-500 hover:text-red-500"
                  title="Deletar"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LivroList;
