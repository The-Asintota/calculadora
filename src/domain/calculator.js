import { evaluate } from 'mathjs'


const expValidation = /^[0-9 \.\+\-\*\/\=\(\)]*$/


export class Calculate {
    constructor(expression) {
        if (!expValidation.test(expression)) {
            throw new Error("InvalidExpression")
        }
        this.expression = expression
    }

    GetResult () {
        try {
            let result = evaluate(this.expression)
            result = Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(5)).toString()
            return result
        } catch {
            throw new Error("EvaluationError")
        }
    }
}