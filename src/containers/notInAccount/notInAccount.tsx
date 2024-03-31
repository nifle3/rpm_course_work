import "./notInAccount.css"
import {Link} from "react-router-dom";

export default function NotInAccount() {
    return (
        <div className={"not-in-account"}>
            <Link to={""} className={"not-in-account-text"}>Сначала войдите в аккаунт</Link>
        </div>
    )
}