import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import GameStatus from "./GameStatus";

function Game({setName, rollDice, dice, game, message, cookies, eggs, frogs, grogu}) {
  return (
    <>
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
    </>
  )
}

export default Game