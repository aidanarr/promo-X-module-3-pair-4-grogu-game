const Header = ({name}) => {
    if (name !== ""){
        name = ", " + name;
    }

    return (
        <header>
        <h1 className="title">¡Cuidado con Grogu{name}!</h1>
        </header>
    )
}

export default Header