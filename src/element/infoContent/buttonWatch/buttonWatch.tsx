import "./buttonWatch.css"

export interface ButtonWatchProps {
    text : string
    onClick : () => void
}

export default function ButtonWatch({text, onClick} : ButtonWatchProps) {
    return (
        <button onClick={onClick} className={"button-watch"}>
            {text}
        </button>
    )
}