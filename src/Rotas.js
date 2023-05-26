import {Routes,Route } from 'react-router-dom';


import LoginPages from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Register } from './pages/Register';
import RecuperacaoSenha from './pages/RecSenha';

export default function RotasPage() {

    return(
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperacao" element={<RecuperacaoSenha />} />
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>}/>
      </Routes>

    );
}