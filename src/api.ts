import {EmailAndPasswordData} from "./types.ts";

export default class Api {
    public static readonly ENDPOINT : string = "http://localhost:8000"

    public static async Registration(data : EmailAndPasswordData) {
        return await fetch(this.ENDPOINT + "/registration/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json()).catch(reason => reason)
    }

    public static async Login(data : EmailAndPasswordData) {
        return await fetch(this.ENDPOINT + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        }).then(resp => resp.json()).catch(reason => reason)
    }

    public static async GetSubscribes() {
        return await fetch('http://localhost:8000/subscribe', {
            method: "GET"
        }).then(response => response.json()).catch(reason => reason);
    }

    public static GetUser(jwt : string) {
        return async () => {
            return await fetch(this.ENDPOINT + "/user/get/profile", {
                method: "POST",
                headers: {
                    "Token": jwt,
                },
            }).then(resp => resp.json()).catch(reason => reason)
        }
    }

    public static LinkWithSubscribe(id : string | number,jwt : string) {
        return async () => {
            return await fetch(this.ENDPOINT + "/user/link/subscribe/" + id.toString(), {
                method: "POST",
                headers: {
                    "token": jwt,
                }
            }).then(resp => resp.json())
        }
    }
}