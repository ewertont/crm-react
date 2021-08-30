import React from "react";
import { Link } from "react-router-dom";
import "./novaconta.css";

function novaConta() {
  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img
          className="mb-4"
          src="/Images/logo-small2.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="E-mail"
          />
          <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
          />
          <label for="floatingPassword">Senha</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Criar Conta
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por EPTA</p>
        <div className="login-links">
            <Link to="/app" className="mx-3">Realizar login</Link>
        </div>
      </form>
    </div>
  );
}
export default novaConta;