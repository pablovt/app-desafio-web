import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import LivroList from './pages/livroList';
import LivroCreate from './pages/livroCreate';
import LivroEdit from './pages/livroEdit';
import LivroView from './pages/livroView';
import ConsultaClima from './pages/consultaClima';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/livros" element={<LivroList />} />
          <Route path="/livros/create" element={<LivroCreate />} />
          <Route path="/livros/view/:id" element={<LivroView />} />
          <Route path="/livros/edit/:id" element={<LivroEdit />} />
          <Route path="/clima/view" element={<ConsultaClima />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
