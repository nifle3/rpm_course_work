import "./dataSettingsInput.css"
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {MutationFunction, useMutation} from "@tanstack/react-query";
import {useStore} from "../../store.ts";
import {queryClient} from "../../main.tsx";

export type inputType = "text" | "password" | "email"

export interface DataSettingsInputProps {
    Title : string
    Placeholder : string
    Type : inputType
    SetError : Dispatch<SetStateAction<string>>
    Action : (newValue : string) => MutationFunction<unknown, void>
}

type backgroundClassType = "" | "data-settings-data-input-wrapper-bcg-color"

export default function DataSettingsInput({Title, Placeholder, Type, Action, SetError} : DataSettingsInputProps) {
    const setJwt = useStore(set => set.Login)

    const [backgroundColor, setBackgroundColor]
        = useState<backgroundClassType>("");
    const inputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState<string>("")
    const mutation = useMutation({
        mutationFn: Action(inputValue),

        onSuccess: async (data) =>{
            await queryClient.invalidateQueries({queryKey: ['profile']})
            SetError("")
            setInputValue("")

            if (typeof data == 'string' && (Type == "password" || Type == "email")) {
                setJwt(data)
            }
        },
        onError: () =>{
            SetError("Ошибка сервера ")
        }

    })

    const onClick = () => {
        if (inputRef == null) {
            throw "REF IS NULL"
        }

        if (inputRef.current == null) {
            throw "INPUT CURRENT IS NULL"
        }

        if (!inputRef.current.validity.valid) {
            SetError(inputRef.current.validationMessage)
            return
        }

        mutation.mutate()
    }

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
                <input value={inputValue} placeholder={Placeholder}
                       onChange={(e) => setInputValue(e.target.value)}
                       className={"data-settings-data-input"} onFocus={changeBcgColor}
                onBlur={changeBcgColor} type={Type} ref={inputRef} maxLength={50} required={true}/>
                <span className={"data-settings-input-update"} onClick={onClick}>Изменить</span>
            </div>
        </div>
    )
}