import "../styles/recentOperations.css"


export const RecentOperations = () => {
    return (
        <section className="recentOperation">
            <h2 className="recentOperation__title">Historial</h2>
            <article className="recentOperation__content">
                <header>
                    <h3>Operaciones recientes:</h3>
                </header>

                <ul className="content__items">
                    <li className="item">
                        <div className="itemOperation">1+1</div>
                        <div className="itemResult">= 2</div>
                    </li>
                </ul>
            </article>

            <div className="recentOperation__clean">
                <button className="cleanButton">
                    Limpiar Historial
                </button>
            </div>
        </section>
    )
}