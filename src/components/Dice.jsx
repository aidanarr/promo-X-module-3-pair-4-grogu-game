function Dice({rollDice}) {
    const handleClick = (event) => {
        rollDice();
        
    }
  return (
    <>
          <button className="dice" onClick={handleClick}>🎲Lanzar dado🎲</button>
    </>
  )
}

export default Dice