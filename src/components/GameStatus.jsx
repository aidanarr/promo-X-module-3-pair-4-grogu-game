function GameStatus({dice, game, message}) {
let hiddenClass = "hidden";
  return (
    <>
        <p className={dice === null ? hiddenClass : ""}>Ha salido el número: {dice}</p>
        <p>{message}</p>
        <div className="game-status">{game}</div>
    </>
  )
}

export default GameStatus