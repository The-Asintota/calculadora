import { Calculator } from "./components/calculator/calculator.jsx"
import { RecentOperations } from "./components/recentOperations.jsx"
import "./styles/index.css"


export const WebCalculator = () => {
    return (
        <section className="content">
            <RecentOperations />
            <Calculator />
        </section>
    )
}