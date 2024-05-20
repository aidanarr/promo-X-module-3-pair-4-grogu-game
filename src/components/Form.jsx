import PropTypes from "prop-types";

function Form(props) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        props.setName(value);
    }
  return (
    <form>
        <label  htmlFor="name">Introduce tu nombre para jugar</label>
        <input type="text" name="name" id="" onChange={handleInputChange}/>
        
        
    </form>
  )
}

Form.propTypes = {
  setName: PropTypes.func,
};


export default Form