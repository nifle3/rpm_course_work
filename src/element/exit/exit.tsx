import "./exit.css"
import exitIcon from "./icons/exit.svg"
import {useNavigate} from "react-router-dom";

export interface ExitProps {
    RedirectTo? : string
}

export default function Exit({RedirectTo = "/"} : ExitProps) {
    const navigate = useNavigate()

    const onExit = () => {
        navigate(RedirectTo)
    }

    return (
        <img src={exitIcon} alt={"Назад"} className={"exit"}
             onClick={onExit}/>
    )
}