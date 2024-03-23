import { useEffect } from "react";
import "./error.css"

function Error({errorCode, errorShortInfo , errorInfo } :
                   {errorCode : number, errorShortInfo : string , errorInfo : string}) {

    useEffect(() => {
        document.title = "Ошибка " + errorCode;
    });

    errorShortInfo = errorShortInfo.toUpperCase();
    errorInfo = errorInfo.toUpperCase();

    return (
    <div className={"not-found-container"}>
        <h3>{errorShortInfo}</h3>
        <div className={"not-found-container1"}>
            <h1 className={"not-found-text1"}>{errorCode}</h1>
        </div>
        <div className={"not-found-container2"}>
            <h2 className={"not-found-text2"}>{errorInfo}</h2>
        </div>
    </div>
    )
}

export default Error;