import PropTypes from "prop-types";

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

Header.propTypes = {
    name: PropTypes.string,
};

export default Header

