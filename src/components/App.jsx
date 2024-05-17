import "../styles/App.scss"
import {useState} from 'react';
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";

function App() {
  const [grogu, setGrogu] = useState(0);
  const [dice, setDice] = useState(null);
  const [game, setGame] = useState('En curso.');
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function rollDice() {
    const randomNumber = getRandomNumber(4);
    setDice(randomNumber);

    if (randomNumber === 4) {
      setGrogu(grogu + 1);
      setMessage(`${name} Grogu ha avanzado una casilla.`);
    } else if (randomNumber === 1 && cookies.length > 0) {
      setCookies(cookies.slice(1));
      setMessage(`${name} Se ha descargado una cookie.`);
    } else if (randomNumber === 2 && eggs.length > 0) {
      setEggs(eggs.slice(1));
      setMessage(`${name} Se ha descargado un huevo.`);
    } else if (randomNumber === 3 && frogs.length > 0) {
      setFrogs(frogs.slice(1));
      setMessage(`${name} Se ha descargado una rana.`);
    }
    
    gameStatus();
  }

  const gameStatus = () => {
    if (grogu === 7){
      setGame("El juego ha terminado.")
    }else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0){
      setGame("El juego ha terminado.")
    }
  }


  return (
    
    <>
    <Header name={name}/>
    <main className="page">
    <Form setName= {setName}/>
    <Board moveGrogu={grogu} />
      <section className= "dice-box">
        <Dice rollDice={rollDice} />
        <GameStatus dice={dice} game={game} message={message} />
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
