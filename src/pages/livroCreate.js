import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLivro } from '../api/livro';

function LivroCreate() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [numeroPaginas, setNumeroPaginas] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoLivro = {
      titulo,
      autor,
      descricao,
      numeroPaginas: parseInt(numeroPaginas),
      dataCadastro,
    };

    try {
      await createLivro(novoLivro);
      alert('Livro criado com sucesso!');
      navigate('/livros');
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
      alert('Erro ao criar o livro. Tente novamente.');
    }
  };

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Cadastrar Novo Livro</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Autor</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Número de Páginas</label>
            <input
              type="number"
              value={numeroPaginas}
              onChange={(e) => setNumeroPaginas(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Data de Cadastro</label>
            <input
              type="date"
              value={dataCadastro}
              onChange={(e) => setDataCadastro(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/livros')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LivroCreate;
