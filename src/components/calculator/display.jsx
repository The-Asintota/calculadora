import "../../styles/calculator/display.css"


export const Display = () => {
    return (
        <div className="clt-display">
            <div className="clt-disply-recentOperation"></div>
            <div className="clt-display-equalSymbol">=</div>
            <div className="clt-display-operation">0</div>
        </div>
    )
}