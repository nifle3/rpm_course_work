import "./miniProfile.css"
import {Link} from "react-router-dom";
import {useStore} from "../../store.ts";
import {useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import Error from "../../pages/error/error.tsx";

export default function MiniProfile() {
    const logout = useStore(set => set.Logout)
    const {data, error, isError, isLoading} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser
    })

    if (isLoading) {
        return  <span>loading</span>
    }

    if (isError) {
        return <Error errorCode={500} errorShortInfo={error.name} errorInfo={error.message}/>
    }

    const onClick = () => {
        logout()
    }

    return (
        <div className={"mini-profile"}>
            <div className={"mini-profile-circle"}>
                <img src={Api.GetImage(data.image_url)} alt={"К"}/>
            </div>
            <div className={"mini-profile-dropdown"}>
                <div>
                    <div  className={"mini-profile-dropdown-wrapper"}>
                        <span className={"mini-profile-dropdown-name"}>{data.name + data.surname == "" ? "Не задано": data.name + " "+ data.surname}</span><br/>
                    </div>
                    <div  className={"mini-profile-dropdown-wrapper"}>
                        <span className={"mini-profile-dropdown-email"}>{data.email}</span>
                    </div>
                </div>
                <div className={"mini-profile-dropdown-links"}>
                    <Link to={"/settings"}><h4 className={"mini-profile-link"}>Настройки</h4></Link>
                    <Link to={"/code"}><h4 className={"mini-profile-link"}>Активация промокода</h4></Link>
                    <h4 className={"mini-profile-link"} onClick={onClick}>Выйти</h4>
                </div>
            </div>
        </div>
    )
}