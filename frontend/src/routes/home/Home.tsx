import { useState } from 'react'
import GabrielPedrosoPfp from './GabrielPedrosoPfp.jpg'
import './Home.css'

export default function Home() {
  const [searchInp, setSearchInp] = useState('')

  //TODO
  const handleSearchBtn = () => {
    console.log(`Search Button Clicked!\nUser "Searched": ${searchInp}`)
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
        <a href="#">ABOUT US</a>
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
            <h1>Como começar</h1>
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
