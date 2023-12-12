import "../../styles/calculator/display.css"


export const Display = ({ value, operation='' }) => {
    return (
        <div className="clt-display">
            <div className="clt-disply-recentOperation">{operation}</div>
            <div className="clt-display-equalSymbol">=</div>
            <div className="clt-display-operation">{value}</div>
        </div>
    )
}