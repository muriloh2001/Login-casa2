import React, { useState } from "react";
import LoginPages from "./LoginPage";

function RecuperacaoSenha() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const validateEmail = (email) => {
    // Expressão regular para validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCpf = (cpf) => {
    // Expressão regular para validação de CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValidEmail = validateEmail(value);
    // Executa lógica adicional com base na validação de e-mail 

  };

  const handleCpfChange = (e) => {
    const value = e.target.value;
    setCpf(value);
    const isValidCpf = validateCpf(value);
    // Executa lógica adicional com base na validade do CPF
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);
    const isValidCpf = validateCpf(cpf);

    if (isValidEmail && isValidCpf) {
           <LoginPages/>
    } else {

      alert("CPF e e-mail inválidos");
    }
  };

  return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title"> Bem vindo </span>
          <span className="login-form-title">

          </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input
              className={cpf !== "" ? "has-val input" : "input"}
              type="text"
              id="cpf"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              value={cpf}
              onChange={handleCpfChange}
              required
              
            />       

            <span className="focus-input" data-placeholder="CPF"></span>
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
}

export default  RecuperacaoSenha;
