import Grogu from "./Grogu";

const Board = (prop) => {
    

    return (
        <section className="board">
            <div className="cell">
                {prop.moveGrogu === 1 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 2 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 3 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 4 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 5 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 6 ? <Grogu /> : ""}
            </div>
            <div className="cell">
                {prop.moveGrogu === 7 ? <Grogu /> : ""}
            </div>
        </section>
    )
}

export default Board