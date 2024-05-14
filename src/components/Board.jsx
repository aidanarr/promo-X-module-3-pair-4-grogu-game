import Grogu from "./Grogu";

const Board = (prop) => {

    // const cells = [null, null, null, null, null, null, null];

    const cells = Array(7).fill(null);

    console.log(cells);

    const cellList = () => {

        return cells.map((cell, index) => <div className="cell" key={index}>{prop.moveGrogu === index ? <Grogu /> : ""}</div>)
    }

    return (

        <section className="board">
        {cellList()}
            {/* <div className="cell">
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
            </div> */}
        </section>
    )
}

export default Board