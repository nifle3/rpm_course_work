import "./dataSettingsInput.css"
import {useState} from "react";

export interface DataSettingsInputProps {
    Title : string
    Placeholder : string
    Action? : () => void
}

type backgroundClassType = "" | "data-settings-data-input-wrapper-bcg-color"

export default function DataSettingsInput({Title, Placeholder} : DataSettingsInputProps) {
    const [backgroundColor, setBackgroundColor]
        = useState<backgroundClassType>("");

    const changeBcgColor =  () => {
        if (backgroundColor == "") {
            setBackgroundColor("data-settings-data-input-wrapper-bcg-color")
        } else {
            setBackgroundColor("")
        }
    }

    return (
        <div className={"data-settings-input"}>
            <span className={"data-settings-input-title"}>{Title}</span>
            <div className={"data-settings-data-input-wrapper " + backgroundColor}>
                <input placeholder={Placeholder} className={"data-settings-data-input"} onFocus={changeBcgColor}
                onBlur={changeBcgColor}/>
                <span className={"data-settings-input-update"}>Изменить</span>
            </div>
        </div>
    )
}