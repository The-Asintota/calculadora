import "../styles/calculator/keypad.css"


export const KeyPad = ({ onButtonClick }) => {
    const handleButtonClick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            onButtonClick(event.target.value, event.target.innerText)
        }
    }

    return (
        <div className="calculator__keyPad" onClick={handleButtonClick}>
            <button className="keypad__clean" value={'AC'}>AC</button>
            <button className="keypad__operation" value={'('}>(</button>
            <button className="keypad__operation" value={')'}>)</button>
            <button className="keypad__delete" value={'DEL'}></button>
            <button className="keypad__number" value={'7'}>7</button>
            <button className="keypad__number" value={'8'}>8</button>
            <button className="keypad__number" value={'9'}>9</button>
            <button className="keypad__operation" value={'/'}>÷</button>
            <button className="keypad__number" value={'4'}>4</button>
            <button className="keypad__number" value={'5'}>5</button>
            <button className="keypad__number" value={'6'}>6</button>
            <button className="keypad__operation" value={'*'}>x</button>
            <button className="keypad__number" value={'1'}>1</button>
            <button className="keypad__number" value={'2'}>2</button>
            <button className="keypad__number" value={'3'}>3</button>
            <button className="keypad__operation" value={'-'}>-</button>
            <button className="keypad__number" value={'0'}>0</button>
            <button className="keypad__number" value={'.'}>.</button>
            <button className="keypad__operation" value={'='}>=</button>
            <button className="keypad__operation" value={'+'}>+</button>
        </div>
    )
}