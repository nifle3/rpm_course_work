import "./miniProfile.css"
import {Link} from "react-router-dom";
import {useStore} from "../../store.ts";

export default function MiniProfile() {
    const logout = useStore(set => set.Logout)

    const onClick = () => {
        logout()
    }

    return (
        <div className={"mini-profile"}>
            <div className={"mini-profile-circle"}/>
            <div className={"mini-profile-dropdown"}>
                <div>
                    <span className={"mini-profile-dropdown-name"}>Яковлев Мереся</span><br/>
                    <span className={"mini-profile-dropdown-email"}>umnipon@umn.ru</span>
                </div>
                <div className={"mini-profile-dropdown-links"}>
                    <Link to={"/settings"}><h4 className={"mini-profile-link"}>Настройки</h4></Link>
                    <Link to={"/code"}><h4 className={"mini-profile-link"}>Активация промокода</h4></Link>
                    <h4 className={"mini-profile-link"} onClick={onClick}>Выйти</h4>
                </div>
            </div>
        </div>
    )
}