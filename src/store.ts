import {create} from "zustand";

type State = {
    isLogin : boolean
    jwtKey : string | null
}

type Actions = {
    Login : (jwt_key : string) => void
    Logout : () => void
}

const jwt_key_name = "jwt-key"

export const useStore = create<State & Actions>((set) => ({
    isLogin:localStorage.getItem(jwt_key_name) != null,
    jwtKey : localStorage.getItem(jwt_key_name),
    Login: (jwt_key : string) => {
        localStorage.setItem(jwt_key_name, jwt_key)
        set({isLogin: true, jwtKey: jwt_key})
    },
    Logout: () => {
        localStorage.removeItem(jwt_key_name)
         set({isLogin: false, jwtKey: null})
    },
}))