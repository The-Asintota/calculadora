import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import "../styles/recentOperations.css"


const FADE_OUT_DURATION = 500


export const RecentOperations = ({ result, operation }) => {
    const [operationsState, setOperations] = useState([])
    const [ulClass, setUlClass] = useState('')

    const handleButton = () => {
        setUlClass(' fade-out')
        setOperations([])
        setTimeout(() => {
            setUlClass('')
        }, FADE_OUT_DURATION)
    }

    useEffect(() => {
        if (operation) {
            setOperations(prevOperations => [
                { id: uuidv4(), op: operation, re: result },
                ...prevOperations
            ])
        }
    }, [operation])

    return (
        <section className="recentOperation">
            <h2 className="recentOperation__title">Historial</h2>
            <article className="recentOperation__content">
                <header>
                    <h3>Operaciones recientes:</h3>
                </header>

                <TransitionGroup component="ul" className={`content__items${ulClass}`}>
                    {operationsState.map((data) => (
                        <CSSTransition key={data.id} timeout={FADE_OUT_DURATION} classNames="item">
                            <li className="item">
                                <div className="itemOperation">{data.op}</div>
                                <div className="itemResult">{`= ${data.re}`}</div>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </article>

            <div className="recentOperation__clean">
                <button className="cleanButton" onClick={handleButton}>
                    Limpiar Historial
                </button>
            </div>
        </section>
    )
}