import "./error.css"
import { useEffect } from "react";
import {useParams} from "react-router";

export default function ErrorNavigate() {
    const params = useParams()
    const errorCode = params.errorCode

    useEffect(() => {
        document.title = "Ошибка " + errorCode;
    }, [errorCode]);

    return (
    <div className={"not-found-container"}>
        <div className={"not-found-container1"}>
            <h1 className={"not-found-text1"}>{errorCode}</h1>
        </div>
    </div>
    )
}
