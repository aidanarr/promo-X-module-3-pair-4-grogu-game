import "../styles/App.scss"
import {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Options from "./Options";
import Game from "./Game";

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
      setMessage(`${name !== "" ? name + ", Grogu ha avanzado una casilla." : "Grogu ha avanzado una casilla."}`);
    } else if (randomNumber === 1 && cookies.length > 0) {
      setCookies(cookies.slice(1));
      setMessage(`${name !== "" ? name + ", se ha descargado una cookie." : "Se ha descargado una cookie."}`);
    } else if (randomNumber === 2 && eggs.length > 0) {
      setEggs(eggs.slice(1));
      setMessage(`${name !== "" ? name + ", se ha descargado un huevo." : "Se ha descargado un huevo."}`);
    } else if (randomNumber === 3 && frogs.length > 0) {
      setFrogs(frogs.slice(1));
      setMessage(`${name !== "" ? name + ", se ha descargado una rana." : "Se ha descargado una rana."}`);
    }
    
    gameStatus();
  }

  const gameStatus = () => {
    if (grogu === 6){
      setGame("¡¡Grogu se ha comido el cargamento!! Has perdido")
    }else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0){
      setGame("Ganaste. Mando completa la misión.")
    }
  }

  useEffect(() => {
    gameStatus()
  },);


  return (
    
    <>
    <Header name={name}/>
    <main className="page">
      <Routes>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/" element={<Game setName={setName} rollDice={rollDice} dice={dice} game={game} message={message} cookies= {cookies} eggs={eggs} frogs={frogs} grogu={grogu}/>} />
        <Route path="/options" element={<Options/>}/>
     </Routes>
    </main>
    <Footer/>
    </>
    
  )
}

export default App

