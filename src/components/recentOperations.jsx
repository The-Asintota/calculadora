import "../styles/recentOperations.css"


export const RecentOperations = () => {
    return (
        <section className="ro-recentOperations">
            <h2 className="ro-title">Historial</h2>
            <article className="ro-content">
                <header>
                    <h3>Operaciones recientes:</h3>
                </header>

                <ul className="ro-content-items">
                    <li className="item">
                        <div className="item-operation">1+1</div>
                        <div className="item-result">= 2</div>
                    </li>
                </ul>
            </article>

            <div className="ro-clean">
                <button className="ro-clean-button">
                    Limpiar Historial
                </button>
            </div>
        </section>
    )
}