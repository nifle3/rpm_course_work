import "./subscribeCode.css"
import Exit from "../../element/exit/exit.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect, useRef, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import {useNavigate} from "react-router-dom";
import {queryClient} from "../../main.tsx";
import Loader from "../../element/loader/loader.tsx";

export default function SubscribeCode() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Активация кода"
    });
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null)
    const [inputCal, setInputCal] = useState<string>("")
    const [errorr, setErrorr] = useState<string>("")
    const {data, isError, isPending} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser,
        retry: 2,
    })
    const mutation = useMutation({
        mutationFn: Api.SubscribeCode(inputCal),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['profile']})
            navigate("/")
        }
    })

    const isLogin = useStore(set => set.isLogin)

    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>
    }
    if (isPending) {
        return <Loader/>

    }
    if (isError) {
        return <div className={"subscribe-settings-container"}>У вас нет подписки</div>

    }

    const onClick = () => {
        if (inputRef == null || inputRef.current == null) {
            throw "inputref is null"
        }

        if (!inputRef.current.validity.valid) {
            setErrorr(inputRef.current.validationMessage)
            return
        }

        mutation.mutate()
    }

    return (
        <div className={"subscribe-code-container"}>
            <Exit/>
            {data.have_subscribe || data.have_subscribe ? <h1>У вас уже есть подписка</h1> :
                <div>
                    <h1 className={"subscribe-code-title"}>Получите подписку на фильмы,сериалы и аниме</h1>
                    <div className={"subscribe-code-input-wrapper"}>
                        <input className={"subscribe-code-input"} placeholder={"ВВЕДИТЕ ПРОМОКОД"} required maxLength={20}
                            ref={inputRef} value={inputCal} onChange={(e) => {
                                setInputCal(e.target.value)
                        }}/>
                        <span className={"error"}>{errorr}</span>
                        {!mutation.isPending && <button className={"subscribe-code-button"} onClick={onClick}>
                            Получить подписку
                        </button>}
                    </div>
                </div>
            }
        </div>
    )
}