import "./major.css"
import {useEffect} from "react";
import WelcomeSubscribe from "../../element/welcomeMajor/welcomeSubscribe/welcomeSubscribe.tsx";
import {useStore} from "../../store.ts";
import Welcome from "../../element/welcomeMajor/welcome/welcome.tsx";
import {useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import Error from "../../pages/error/error.tsx";

export default function Major() {
    const isLogin = useStore(set => set.isLogin)
    const jwtToken = useStore(set => set.jwtKey)

    useEffect(() => {
        document.title = "КИНОHUB"
    });

    const {isPending, isError, data, error} = useQuery({
        queryKey: ["haveSubscribe"],
        queryFn: Api.GetUser(jwtToken??"")
    })

    if (isError){
        return <Error  errorCode={500} errorInfo={error.message} errorShortInfo={error.name}/>
    }

    if (isPending){
        return <span>Loading</span>
    }

    return (
        <>
            {isLogin && data.have_subscribe ?
                <WelcomeSubscribe/> : <Welcome/>
            }
        </>
    )
}