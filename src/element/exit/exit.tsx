import "./exit.css"
import exitIcon from "./icons/exit.svg"
import {useNavigate} from "react-router-dom";

export default function Exit() {
    const navigate = useNavigate()

    const onExit = () => {
        navigate("/")
    }

    return (
        <img src={exitIcon} alt={"Назад"} className={"exit"}
             onClick={onExit}/>
    )
}