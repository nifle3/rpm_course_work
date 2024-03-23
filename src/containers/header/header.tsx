import burgerIcon from "../../icons/burger.svg"
import magnifierIcon from "../../icons/magnifier.svg"
import "./header.css"

function Header() {
    return (
        <div className={"header"}>
            <a href={"#"}>
                <img src={burgerIcon} alt={"Меню"}/>
            </a>
            <h1 className={"company-title"}>KИНОHUB</h1>
            <div className={"navigation-menu"}>
                <a href={"#"}><h2>Главное</h2></a>
                <a href={"#"}><h2>Мое</h2></a>
                <a href={"#"}><h2>Подписки</h2></a>
                <img src={magnifierIcon} alt={"qwe"}/>
            </div>

            <button/>
        </div>
    )
}

export default Header;