import "./history.css"
import Exit from "../../element/exit/exit.tsx"
import HistoryElement from "../../element/historyElement/historyElement.tsx";

export default function History() {
    return (
        <div className={"history-container"}>
            <Exit/>
            <div>
                <h1 className={"history-title"}>
                    Оценки и просмотр
                </h1>
                <HistoryElement/>
            </div>
        </div>
    )
}