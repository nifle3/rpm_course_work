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
                <img src={burgerIcon} alt={"Меню"}  className={"burger-icon"}/>
                <h1>KИНОHUB</h1>
            </div>
            {isToggle &&
            <ul>
                <li className={"list-item"}>
                    <img src={mainIcon} alt={""}/>
                    <a className={"list-link"} onClick={(e) => {
                        e.preventDefault()
                        toDefault()
                    }}>Главная</a>
                </li>
                <li className={"list-item"}>
                    <img src={movieIcon} alt={""}/>
                    <a className={"list-link"} onClick={(e) => {
                        e.preventDefault()
                        toMovie()
                    }}>Фильмы</a>
                </li>
                <li className={"list-item"}>
                    <img src={animeIcon} alt={""}/>
                    <a className={"list-link"} onClick={(e) => {
                        e.preventDefault()
                        toAnime()
                    }}>Аниме</a>
                </li>
                <li className={"list-item"}>
                    <img src={serialIcon} alt={""}/>
                    <a className={"list-link"} onClick={(e) => {
                        e.preventDefault()
                        toSerial()
                    }}>Сериалы</a>
                </li>
            </ul>}
        </div>
    )
}