
function Instructions() {
  return (
<>
    <section className="instructions">
        <h2>REGLAS DEL JUEGO</h2>
        <h3>OBJETIVO DEL JUEGO:</h3>
        <p>El objetivo es vaciar el armario trasladando la mercancía a la zona segura sin que Grogu logre llegar al armario. Si Grogu llega al armario antes de que completes la tarea, se come lo que encuentre, lo que resulta en la pérdida de la misión y, por lo tanto, de la recompensa.</p>

        <h3>CÓMO JUGAR:</h3>
        <ul>
            <li>Movimiento de la Mercancía: En cada turno, puedes elegir trasladar una pieza de mercancía desde el armario hacia la zona segura. Esto simula el proceso de descarga.</li>
            <li>Movimiento de Grogu: Después de cada uno de tus movimientos, Grogu intentará avanzar hacia el armario. Puedes simular este movimiento lanzando un dado o eligiendo al azar cómo se mueve Grogu .</li>
            <li>Estrategia: Debes planificar tus movimientos cuidadosamente. Puede que necesites detenerte y bloquear el avance de Grogu de alguna manera, asegurando que no llegue al armario antes de que vacíes completamente la mercancía.</li>
        </ul>
        <h3>FINAL DEL JUEGO</h3>
        <p>El juego termina cuando:</p>
        <ul>
            <li>Logras vaciar completamente el armario sin que Grogu alcance la mercancía. Ganas el juego y aseguras la recompensa.</li>
            <li>Grogu llega al armario antes de que hayas terminado de vaciarlo. Pierdes el juego, y Mando pierde la oportunidad de localizar a Ahsoka.</li>
        </ul>
    </section>
</>
    
  )
}

export default Instructions