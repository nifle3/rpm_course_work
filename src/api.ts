import {EmailAndPasswordData} from "./types.ts";

const ENDPOINT : string = "http://localhost:8000"
const jwtKey : string = "jwt-key"

export default class Api {
    public static async Registration(data : EmailAndPasswordData) {
        return await fetch(ENDPOINT + "/registration/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(resp => {
            if (!resp.ok){
                throw resp.status
            }

            return resp.json()
        })
    }

    public static async Login(data : EmailAndPasswordData) {
        return await fetch(ENDPOINT + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        }).then(resp => {
            if (!resp.ok){
                throw resp.status
            }

            return resp.json()
        })
    }

    public static async GetSubscribes() {
        return await fetch('http://localhost:8000/subscribe', {
            method: "GET"
        }).then(resp => {
            return resp.json()
        })
    }

    public static async GetUser() {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return await fetch(ENDPOINT + "/user/get/profile", {
            method: "POST",
            headers: {
                "Token": jwt,
                "Content-Type": "application/json",
            },
        }).then(resp => {
            return resp.json()
        })
    }

    public static  LinkWithSubscribe(id : string | number) {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return async () => {
            return await fetch(ENDPOINT + "/user/link/subscribe/" + id.toString(), {
                method: "POST",
                headers: {
                    "token": jwt,
                }
            }).then(resp => {
                return resp
            })
        }
    }

    public static GetImage(linkToImage : string) {
        if (linkToImage == undefined){
            return ""
        }

        if (linkToImage.startsWith("images")){
            return ENDPOINT + "/" + linkToImage
        }

        return ENDPOINT + "/images/" + linkToImage
    }

    public static UpdateUser(newValue : string, type : string) {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return async () => {
            const data = {
                "name_field": type,
                "information": newValue,
            }

            return await fetch(ENDPOINT + "/user/update/user", {
                method: "POST",
                headers: {
                    "Token": jwt,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then(resp => {
                return resp.text()
            })
        }
    }

    public static async GetSubscribeUser() {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return await fetch(ENDPOINT + "/user/get/subscribe", {
            method: "POST",
            headers: {
                "Token": jwt,
                "Accept": "application/json",
            },
        }).then(resp => {
            return resp.json()
        })
    }
    
    public static async DeleteSubscribe() {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return await fetch(ENDPOINT + "/user/unlink/subscribe", {
            method: "POST",
            headers: {
                "Token": jwt,
            }
        }).then(resp => resp)
    }

    public static  SubscribeCode(code : string) {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return async () => {
            return await fetch(ENDPOINT + "/user/get/promocode/" + code, {
                method: "POST",
                headers: {
                    "Token": jwt,
                },
            })
        }
    }

    public static async GetAllMovie() {
        return await fetch(ENDPOINT + "/content/movie", {
            method: "GET",
            headers: {
                "Allow": "application/json",
            },
        }).then(resp => resp.json())
    }

    public static async GetContent(idx : number | string) {
        const jwt = localStorage.getItem(jwtKey) ?? ""

        return await fetch(ENDPOINT + "/user/get/content/" + idx, {
            method: "POST",
            headers: {
                "Token": jwt,
            }
        }).then(response => response.body)
    }
}