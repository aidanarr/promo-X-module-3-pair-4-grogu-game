import "../styles/App.scss"
import {useState} from 'react';
import Header from "./Header";
import Board from "./Board";

function App() {
  const [grogu, setGrogu] = useState(1);
  const [dice, setDice] = useState(null);
  const [game, setGame] = useState('ongoing');
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function rollDice() {
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);
    setDice(randomNumber);

    if (randomNumber === 4) {
      setGrogu(grogu + 1);
    } else if (randomNumber === 1 && cookies.length > 0) {
      setCookies(cookies.slice(1))
    } else if (randomNumber === 2 && eggs.length > 0) {
      setEggs(eggs.slice(1))
    } else if (randomNumber === 3 && frogs.length > 0) {
      setFrogs(frogs.slice(1))
    }
    
  }



  return (
    
    <>
    <Header />
    <main className="page">
    <Board moveGrogu={grogu} />
      <section>
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">{cookies}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{eggs}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">{frogs}</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    
    </>
    
  )
}

export default App
