import "./miniProfile.css"
import {Link} from "react-router-dom";

export default function MiniProfile() {
    return (
        <div className={"mini-profile"}>
            <div className={"mini-profile-circle"}/>
            <div className={"mini-profile-dropdown"}>
                <div>
                    <span className={"mini-profile-dropdown-name"}>Яковлев Мереся</span><br/>
                    <span className={"mini-profile-dropdown-email"}>umnipon@umn.ru</span>
                </div>
                <div className={"mini-profile-dropdown-links"}>
                    <Link to={"/"}><h4 className={"mini-profile-link"}>Настройки</h4></Link>
                    <Link to={"/"}><h4 className={"mini-profile-link"}>Оценки и просмотры</h4></Link>
                    <Link to={"/"}><h4 className={"mini-profile-link"}>Активация промокода</h4></Link>
                    <Link to={"/"}><h4 className={"mini-profile-link"}>Выйти</h4></Link>
                </div>
            </div>
        </div>
    )
}