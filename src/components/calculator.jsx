import { useState } from "react"
import { Display } from "./display.jsx"
import { KeyPad } from "./keyPad.jsx"
import { RecentOperations } from "./recentOperations.jsx"
import { Calculate } from "../domain/calculator.js"
import "../styles/calculator/calculator.css"


const MAX_LENGTH = 16
let mathExpression = ''


export const WebCalculator = () => {
    const [displayValue, setDisplayValue] = useState('0')
    const [recentOperation, setRecentOperation] = useState('')

    const handleAC = () => {
        setRecentOperation('')
        setDisplayValue('0')
        mathExpression = ''
    }
    const handleDEL = () => {
        setDisplayValue(prevValue => prevValue.slice(0, -1))
    }
    const handleEqual = () => {
        const expression = new Calculate(mathExpression)
        setRecentOperation(displayValue)
        setDisplayValue(expression.GetResult())
        mathExpression = expression.GetResult()
    }

    const map = { 'AC': handleAC, 'DEL': handleDEL, '=': handleEqual }

    const handleButtonValue = (value, innerText) => {
        if (Object.keys(map).includes(value)) {
            return map[value]()
        }
        if (displayValue === '0') {
            mathExpression = value
            return setDisplayValue(innerText)
        }
        if (mathExpression.length <= MAX_LENGTH - 1) {
            mathExpression += value
            return setDisplayValue(prevValue => prevValue + innerText)
        }
    }

    return (
        <section className="webCalculator">
            <RecentOperations result={displayValue} operation={recentOperation} />

            <section className="calculator">
                <Display result={displayValue} operation={recentOperation} />
                <KeyPad onButtonClick={handleButtonValue} />
            </section>
        </section>
    )
}