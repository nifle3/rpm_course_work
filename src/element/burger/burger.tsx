import burgerIcon from "./icons/burger.svg"
import mainIcon from "./icons/mainIcon.svg"
import movieIcon from "./icons/movieIcon.svg"
import animeIcon from "./icons/animeIcon.svg"
import serialIcon from "./icons/serialIcon.svg"
import "./burger.css"

export interface BurgerProps {
    toDefault : () => void
    toMovie : () => void
    toAnime : () => void
    toSerial : () => void
}

export default function Burger({toDefault, toMovie, toAnime, toSerial} : BurgerProps) {
    return (
        <div className={"burger"}>
            <button className={"burger-title"}>
                <img src={burgerIcon} alt={"Меню"}  className={"burger-icon"}/>
                <h1>KИНОHUB</h1>
            </button>
            <div className={"burger-dropdown"}>
                <ul className={"burger-list"}>
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
                </ul>
            </div>
        </div>
    )
}