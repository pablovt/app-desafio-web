import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md px-4">
          <div className="flex flex-col w-full mb-6 shadow-lg rounded-lg bg-gray-200 border border-gray-300">
            <div className="px-6 py-6 bg-gray-100 rounded-t-lg">
              <div className="text-center mb-3">
                <h6 className="text-gray-700 text-sm font-semibold">
                  Portal
                </h6>
              </div>
              <hr className="mt-4 border-gray-300" />
            </div>
            <div className="px-6 py-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-gray-800 text-white text-sm font-bold uppercase px-6 py-2 rounded-md shadow-md hover:bg-gray-700 focus:outline-none w-full"
                  >
                    Entrar
                  </button>
                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                  <div className="mt-6 text-center">
                    <Link to="/auth/register" className="text-blue-600 hover:underline">
                      <small>Registre-se</small>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
