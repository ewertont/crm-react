import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import firebase from '../Config/firebase'
import 'firebase/auth';


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');

  function alterarEmail(event) {
    setEmail(event.target.value)
  }

  function alterarSenha(event) {
    setSenha(event.target.value)
  }

  function loginUsuario() {
    console.log('entrou')
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function (firebaseUser) {
        console.log('S')
        setSucesso('S');
      }).catch(function (error) {
        console.log('N')
        setSucesso('N');
      })
      console.log('saiu')
  }
  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <img className="mb-4" src="Images/logo-small2.png" alt="" />
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label for="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label for="floatingPassword">Senha</label>
      </div>

      <button onClick={loginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>
      
      {sucesso === 'N' ?
        <div class="alert alert-warning mt-2" role="alert">
          Usuário ou senha inválida!
        </div> : null}

      <div className="login-links mt-5">
        <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
        <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
    </form>
  </div>
}

export default Login;