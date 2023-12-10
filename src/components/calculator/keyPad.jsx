import "../../styles/calculator/keypad.css"


export const KeyPad = () => {
    return (
        <div className="clt-calculator-keypad">
            <button className="clt-calculator-keypad-clean">AC</button>
            <button className="clt-calculator-keypad-operation">(</button>
            <button className="clt-calculator-keypad-operation">)</button>
            <button className="clt-calculator-keypad-delete"></button>
            <button className="clt-calculator-keypad-number">7</button>
            <button className="clt-calculator-keypad-number">8</button>
            <button className="clt-calculator-keypad-number">9</button>
            <button className="clt-calculator-keypad-operation">÷</button>
            <button className="clt-calculator-keypad-number">4</button>
            <button className="clt-calculator-keypad-number">5</button>
            <button className="clt-calculator-keypad-number">6</button>
            <button className="clt-calculator-keypad-operation">x</button>
            <button className="clt-calculator-keypad-number">1</button>
            <button className="clt-calculator-keypad-number">2</button>
            <button className="clt-calculator-keypad-number">3</button>
            <button className="clt-calculator-keypad-operation">-</button>
            <button className="clt-calculator-keypad-number">0</button>
            <button className="clt-calculator-keypad-number">.</button>
            <button className="clt-calculator-keypad-operation">=</button>
            <button className="clt-calculator-keypad-operation">+</button>
        </div>
    )
}