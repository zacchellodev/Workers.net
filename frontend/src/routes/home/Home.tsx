import { useState } from 'react'
import GabrielPedrosoPfp from './GabrielPedrosoPfp.jpg'
import './Home.css'

export default function Home() {
  const [searchInp, setSearchInp] = useState('')
  
  //login/register
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [usernameInp, setUsernameInp] = useState('')
  const [emailInp, setEmailInp] = useState('')
  const [passwordInp, setPasswordInp] = useState('')

  //TODO
  const handleSearchBtn = () => {
    console.log(`Search Button Clicked!\nUser "Searched": ${searchInp}`)
  }

  const handleLoginRegisterSwitch = () => {
    switch (showLoginForm) {
      case false:
        setShowLoginForm(true)
        break
      case true:
        setShowLoginForm(false)
        break
      default:
        break
    }
  }

  //TODO
  const handleLoginSubmit = () => {
    console.log(`Username typed: ${usernameInp}\nPassword typed: ${passwordInp}`)
  }

  //TODO
  const handleRegisterSubmit = () => {
    console.log(`Username typed: ${usernameInp}\nEmail typed: ${emailInp}\nPassword typed: ${passwordInp}`)
  }

  return (
    <div className="homeContent">
      <div className="home-header">
        <a href="#">HOME</a>
        <div className="home-search-box-container">
          <input
            type="text"
            className="home-search-box"
            placeholder="Search..."
            onChange={(e) => setSearchInp(e.target.value)}
          />
          <button onClick={handleSearchBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <a href="#">SOBRE NÓS</a>
      </div>
      <div className="home-main">
        <article className="left">
          <div className="whyUs">
            <h1>Porque a <span>Workers.net</span>?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Atque quaerat voluptatibus quas enim dicta,<br />
            aliquam error impedit velit quasi ratione dolores, alias nihil,<br />
            labore quibusdam. Cumque officiis modi at neque.</p>
          </div>
          <div className="howStart">
            <h1 id="getStartedTitle">Como começar</h1>
            {showLoginForm === false ? (
              <div>
                <form className="loginRegisterForm" onSubmit={handleLoginSubmit}>
                  <h1>Entrar</h1>
                  <label>
                    Nome de usuário
                    <br />
                    <input
                      type="text"
                      placeholder="Username..."
                      required
                      onChange= {(e) => setUsernameInp(e.target.value)}
                    />
                  </label><br />
                  <label>
                    Senha
                    <br />
                    <input
                      type="password"
                      placeholder="Senha..."
                      required
                      onChange={(e) => setPasswordInp(e.target.value)}
                    />
                  </label>
                  <br />
                  <button type="submit">ENVIAR</button>
                </form>
                <br />
                <span>Não tem uma conta ainda? <a id="switchForm" onClick={handleLoginRegisterSwitch}>Registre-se</a></span>
              </div>
            ) : (
              <div>
                <form className="loginRegisterForm" onSubmit={handleRegisterSubmit}>
                  <h1>Registrar</h1>
                  <label>
                    Nome de usuário
                    <br />
                    <input
                      type="text"
                      placeholder="Username..."
                      required
                      onChange= {(e) => setUsernameInp(e.target.value)}
                    />
                  </label><br />
                  <label>
                    Email
                    <br />
                    <input
                      type="email"
                      placeholder="Email..."
                      required
                      onChange={(e) => setEmailInp(e.target.value)}
                    />
                  </label><br />
                  <label>
                    Senha
                    <input
                      type="password"
                      placeholder="Senha..."
                      required
                      onChange={(e) => setPasswordInp(e.target.value)}
                    />
                  </label>
                  <br />
                  <button type="submit">ENVIAR</button>
                </form>
                <br />
                <span style={{ paddingLeft: '40px' }}>Já tem uma conta? <a id="switchForm" onClick={handleLoginRegisterSwitch}>Entrar</a></span>
              </div>
            )}
          </div>
        </article>
        <article className="right">
          <h1 id="title">Por trás da equipe,<br />quem somos nós?</h1>
          <div className="pic-name-function">
            <a href="https://www.zacchello.site/" target="_blank"><h1>João Zacchello</h1></a>
            <img src="https://avatars.githubusercontent.com/u/144489119?v=4" alt="Joao Zacchello Github Picture" />
            <h2>Fundador e CEO da<br />Workers.net</h2>
          </div>
          <div className="pic-name-function">
            <a href="#" target="_blank"><h1>Gabriel Pedroso</h1></a>
            <img src={GabrielPedrosoPfp} alt="Gabriel Pedroso Instagram Picture" />
            <h2>Co-Fundador da<br /> Workers.net</h2>
          </div>
        </article>
      </div>
    </div>
  )
}
