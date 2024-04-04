import "./major.css"
import {useEffect} from "react";
import WelcomeSubscribe from "../../element/welcomeMajor/welcomeSubscribe/welcomeSubscribe.tsx";

export default function Major() {
    useEffect(() => {
        document.title = "КИНОHUB"
    });

    return (
        <>
            <WelcomeSubscribe/>
        </>
    )
}