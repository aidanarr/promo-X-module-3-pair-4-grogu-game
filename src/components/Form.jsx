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

export default Form