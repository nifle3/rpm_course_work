import "./buttonInfoContent.css"

export interface ButtonInfoContentProps {
    onClick : () => void
    text : string
    className? : string
}

export default function ButtonInfoContent({onClick, text, className} : ButtonInfoContentProps) {
    return (
        <button onClick={onClick} className={"button-info-content " + (className != undefined ? className : "")}>
            {text}
        </button>
    )
}