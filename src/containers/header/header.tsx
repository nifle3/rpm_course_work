import "./header.css"
import Burger from "../../element/burger/burger.tsx"
import Magnifier from "../../element/magnifier/magnifier.tsx";
import {Link, useNavigate,} from "react-router-dom";
import {useState} from "react";

//TODO: Добавить обработку профиля
export default function Header() {
    const [majorUri, setMajorUri] = useState("/");
    const navigate = useNavigate();

    const setMajorUriTo = (uri : string) => {
        return () => {
            if (!document.documentURI.includes(uri)) {
                navigate(uri)
            }
            setMajorUri(uri)
        }
    }

    const setMajorUriToDefault = setMajorUriTo("/")
    const setMajorUriToMovie = setMajorUriTo("/movie")
    const setMajorUriToAnime = setMajorUriTo("/anime")
    const setMajorUriToSerial = setMajorUriTo("/serial")

    return (
        <header className={"header"}>
            <Burger toAnime={setMajorUriToAnime} toDefault={setMajorUriToDefault}
                    toMovie={setMajorUriToMovie} toSerial={setMajorUriToSerial}/>

            <div className={"navigation-menu"}>
                <h2><Link to={majorUri} className={"navigation-item"}>Главное</Link></h2>
                <h2><Link to={"/my"} className={"navigation-item"}>Мое</Link></h2>
                <h2><Link to={"/subscribe"} className={"navigation-item"}>Подписки</Link></h2>
                <Magnifier/>
            </div>

            <div className={"profile-info"}>
                <h1>Профиль</h1>
            </div>
        </header>
    )
}