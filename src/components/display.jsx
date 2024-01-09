import { useEffect, useRef, useState } from "react"
import "../styles/calculator/display.css"


export const Display = ({ result, operation }) => {
    const [operationState, setOperationState] = useState(operation)

    const refs = [
        { ref: useRef(null), class: 'display__recentOperation--animation' },
        { ref: useRef(null), class: 'display__transition--animation' },
        { ref: useRef(null), class: 'display__content--animation' },
    ]

    const handleAnimationEnd = (ref, animationClass) => {
        if (ref === refs[0].ref) {
            setOperationState(operation)
        }
        ref.current.classList.remove(animationClass)
    }

    useEffect(() => {
        const handlers = []

        // Add animation event listeners and classes
        if (operation !== '') {
            refs.forEach(({ ref, class: animationClass }) => {
                const handler = () => handleAnimationEnd(ref, animationClass)
                handlers.push({ ref, handler })

                ref.current.addEventListener('animationend', handler)
                ref.current.classList.add(animationClass)
            })
        } else {
            setOperationState('')
        }

        // Clean up the event listener when the component updates or unmounts
        return () => {
            handlers.forEach(({ ref, handler }) => {
                ref.current.removeEventListener('animationend', handler)
            })
        }
    }, [operation])

    return (
        <div className="display" >
            <div className="display__recentOperation" ref={refs[0].ref}>
                {operationState}
            </div>
            <div className="display__equalSymbol">=</div>
            <div className="display__transition" ref={refs[1].ref}>
                {operation}
            </div>
            <div className="display__content" ref={refs[2].ref}>
                {result}
            </div>
        </div>
    )
}