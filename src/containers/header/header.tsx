import "./header.css"
import Burger from "../../element/burger/burger.tsx"
import Magnifier from "../../element/magnifier/magnifier.tsx";
import {Link, useNavigate,} from "react-router-dom";
import {useState} from "react";
import MiniProfile from "../../element/miniProfile/miniProfile.tsx";
import {useStore} from "../../store.ts";

export default function Header() {
    const [majorUri, setMajorUri] = useState("/");
    const navigate = useNavigate();
    const isLogin = useStore((set) => set.isLogin)

    const setMajorUriTo = (uri : string) => {
        return () => {
            if (!document.documentURI.endsWith(uri)) {
                navigate(uri)
            }
            setMajorUri(uri)
        }
    }

    const setMajorUriToDefault = setMajorUriTo("/")
    const setMajorUriToMovie = setMajorUriTo("/movie")
    const setMajorUriToAnime = setMajorUriTo("/anime")

    return (
        <header className={"header"}>
            <div className={"burger"}>
                <Burger toAnime={setMajorUriToAnime} toDefault={setMajorUriToDefault}
                        toMovie={setMajorUriToMovie}/>
            </div>
            <div className={"navigation-menu"}>
                <h2><Link to={majorUri} className={"navigation-item"}>Главное</Link></h2>
                <h2><Link to={"/my"} className={"navigation-item"}>Мое</Link></h2>
                <h2><Link to={"/subscribe"} className={"navigation-item"}>Подписки</Link></h2>
                <Magnifier/>
            </div>

            {isLogin ?
                <MiniProfile/> :
                <button className={"profile-info"} onClick={() => {navigate("/enterToAccount")}}>Войти</button>
            }
        </header>
    )
}