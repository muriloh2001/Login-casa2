import React, { useState } from "react";
//import jwt from 'jsonwebtoken';

import "../assets/global.css";

function LoginPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log('Login auth', { email, password });
    
  }   
  // const express = require('express');
        // const app = express();
        // app.use(cookieParser());

        // // Middleware para verificar se o usuário está autenticado
        // const authenticate = (req, res, next) => {
        //   const sessionToken = req.cookies.sessionToken;

        //       // Verifique se o token de sessão existe
        //       if (!sessionToken) {
        //         // Redirecionar para a página de login
        //         return res.redirect('/login');
        //       }

        //       try {
        //         // Verifique e decodifique o token de sessão
        //         const decoded = jwt.verify(sessionToken, 'your_session_secret');

        //         // Armazene os dados de sessão decodificados na solicitação para uso posterior
        //         req.user = decoded;

        //         // O usuário está autenticado, prossiga para o próximo middleware ou manipulador de rota
        //         next();
        //       } catch (error) {
        //         // Token de sessão inválido ou sessão expirada
        //         res.redirect('/login');
        //       }
        //     };

        //     // Exemplo de rota protegida
        //     app.get('/protected', authenticate, (req, res) => {
        //       // Acesse os dados do usuário do objeto de solicitação
        //       const userId = req.user.userId;
        //       const username = req.user.username;

        //       // Acesse o recurso protegido ou execute ações com base na sessão do usuário
        //       res.status(200).send(`Protected route for user ${username} with ID ${userId}`);
        //     });

        //     //rota de login
        //     app.post('/login', (req, res) => {
        //       // Redirecione para uma rota protegida após o login bem-sucedido
        //       res.redirect('/protected');
        //     });

        //     // Login route
        //     app.get('/login', (req, res) => {
        //       // Renderizar a pagina de login
        //       res.status(200).send('Login page');
        //     });
                // app.get('/logout', (req, res) => {
                //   // Limpa os dados da sessão no lado do servidor
                //   // Limpa o cookie do token de sessão do lado do cliente
                //   res.clearCookie('sessionToken');
                
                //   // Redireciona o usuário para a página de login ou qualquer outro local desejado
                //   res.redirect('/login');
                // });


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handlerSubmit}>
            <span className="login-form-title"> Bem vindo </span>
            <span className="login-form-title">

            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn" >
              <button
                className="login-form-btn"
                type="submit"
              >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default LoginPages;
