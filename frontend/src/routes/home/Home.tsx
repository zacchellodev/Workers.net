import { useState } from 'react'
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
        <div className="left">
          <h1>Porque a <span>Workers.net</span>?</h1>
        </div>
      </div>
    </div>
  )
}
