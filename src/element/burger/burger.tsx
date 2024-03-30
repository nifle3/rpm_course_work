import burgerIcon from "./icons/burger.svg"
import mainIcon from "./icons/mainIcon.svg"
import movieIcon from "./icons/movieIcon.svg"
import animeIcon from "./icons/animeIcon.svg"
import serialIcon from "./icons/serialIcon.svg"
import "./burger.css"
import {useState} from "react"

//TODO: Сделать так что бы он открывался поверх
//TODO: Сделать красивый список
//TODO: Добавить анимации
export default function Burger({toDefault, toMovie, toAnime, toSerial} :
               {toDefault : () => void, toMovie : () => void, toAnime : () => void, toSerial : () => void}) {
    const [isToggle, setIsToggle] = useState(false)

    const setAlternativeToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div className={"burger-main"} onMouseEnter={setAlternativeToggle} onMouseLeave={setAlternativeToggle}>
            <div className={"burger"}>
                <a href={"#"} className={"burger-icon"}>
                    <img src={burgerIcon} alt={"Меню"}/>
                </a>
                <h1>KИНОHUB</h1>
            </div>
            {isToggle &&
                <ul>
                    <li className={"list-item"}>
                        <img src={mainIcon} alt={""}/>
                        <button onClick={toDefault}>Главная</button>
                    </li>
                    <li className={"list-item"}>
                        <img src={movieIcon} alt={""}/>
                        <button onClick={toMovie}>Фильмы</button>
                    </li>
                    <li className={"list-item"}>
                        <img src={animeIcon} alt={""}/>
                        <button onClick={toAnime}>Аниме</button>
                    </li>
                    <li className={"list-item"}>
                        <img src={serialIcon} alt={""}/>
                        <button onClick={toSerial}>Сериалы</button>
                    </li>
                </ul>}
        </div>
    )
}