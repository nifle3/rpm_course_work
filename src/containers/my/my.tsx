import "./my.css"
import {useEffect} from "react";
import {useStore} from "../../store.ts";
import NotInAccount from "../notInAccount/notInAccount.tsx";

export default function My() {
    const isLogin = useStore(set => set.isLogin)

    useEffect(() => {
        document.title = "КИНОHUB | Моё"
    })

    if (!isLogin) {
        return <NotInAccount/>

    }

    return (
        <>
            <h1>My</h1>
        </>
    )
}