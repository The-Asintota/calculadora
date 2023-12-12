import "../../styles/calculator/keypad.css"


export const KeyPad = ({ onButtonClick }) => {
    const handleButtonClick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            onButtonClick(event.target.value, event.target.innerText)
        }
    }
    
    return (
        <div className="clt-calculator-keypad" onClick={handleButtonClick}>
            <button className="clt-calculator-keypad-clean" value={'AC'}>AC</button>
            <button className="clt-calculator-keypad-operation" value={'('}>(</button>
            <button className="clt-calculator-keypad-operation" value={')'}>)</button>
            <button className="clt-calculator-keypad-delete" value={'DEL'}></button>
            <button className="clt-calculator-keypad-number" value={'7'}>7</button>
            <button className="clt-calculator-keypad-number" value={'8'}>8</button>
            <button className="clt-calculator-keypad-number" value={'9'}>9</button>
            <button className="clt-calculator-keypad-operation" value={'/'}>÷</button>
            <button className="clt-calculator-keypad-number" value={'4'}>4</button>
            <button className="clt-calculator-keypad-number" value={'5'}>5</button>
            <button className="clt-calculator-keypad-number" value={'6'}>6</button>
            <button className="clt-calculator-keypad-operation" value={'*'}>x</button>
            <button className="clt-calculator-keypad-number" value={'1'}>1</button>
            <button className="clt-calculator-keypad-number" value={'2'}>2</button>
            <button className="clt-calculator-keypad-number" value={'3'}>3</button>
            <button className="clt-calculator-keypad-operation" value={'-'}>-</button>
            <button className="clt-calculator-keypad-number" value={'0'}>0</button>
            <button className="clt-calculator-keypad-number" value={'.'}>.</button>
            <button className="clt-calculator-keypad-operation" value={'='}>=</button>
            <button className="clt-calculator-keypad-operation" value={'+'}>+</button>
        </div>
    )
}