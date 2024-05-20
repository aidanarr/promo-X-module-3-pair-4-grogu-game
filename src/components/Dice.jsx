import PropTypes from "prop-types";

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

Dice.propTypes = {
  rollDice: PropTypes.func,
};

export default Dice