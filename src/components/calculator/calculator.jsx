import { Display } from "./display.jsx"
import { KeyPad } from "./keypad.jsx"
import "../../styles/calculator/calculator.css"


export const Calculator = () => {
    return (
        <section className="clt-calculator">
            <Display />
            <KeyPad />
        </section>
    )
}