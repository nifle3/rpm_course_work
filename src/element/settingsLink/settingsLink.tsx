import "./settingsLink.css"
import {Link} from "react-router-dom";

export interface SettingsLinkProps {
    Title : string
    Info : string
    RedirectLink : string
}

export default function SettingsLink({Title, Info, RedirectLink} : SettingsLinkProps) {
    return (
        <div className={"settings-link"}>
            <h2>{Title}</h2>
            <Link to={RedirectLink}>
                <button className={"settings-link-info-wrapper"}>
                    {Info}
                </button>
            </Link>
        </div>
    )
}