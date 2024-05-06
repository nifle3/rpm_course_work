import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from "./pages/main/main.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./pages/login/login.tsx"
import AuthorizationForm from "./containers/authorizationForm/authorizationForm.tsx"
import RegistrationForm from "./containers/registrationForm/registrationForm.tsx"
import Major from "./containers/major/major.tsx"
import MajorMovie from "./containers/majorMovie/majorMovie.tsx"
import MajorAnime from "./containers/majorAnime/majorAnime.tsx"
import MajorSerial from "./containers/majorSerial/majorSerial.tsx"
import My from "./containers/my/my.tsx"
import Subscribe from "./containers/subscribe/subscribe.tsx"
import NotInAccount from "./containers/notInAccount/notInAccount.tsx"
import Settings from "./pages/settings/settings.tsx"
import DataSettings from "./pages/dataSettings/dataSettings.tsx";
import SubscribeSettings from "./pages/subscribeSettings/subscribeSettings.tsx";
import SubscribeCode from "./pages/subscrbeCode/subscribeCode.tsx";
import Error from "./pages/error/error.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ErrorNavigate from "./pages/error/errorNavigate.tsx";
import Player from "./pages/player/player.tsx";

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/enterToAccount"} element={<Login/>}>
                        <Route index element={<AuthorizationForm/>}/>
                        <Route path={"registration"} element={<RegistrationForm/>}/>
                    </Route>

                    <Route path={"/"} element={<Main/>}>
                        <Route index element={<Major/>}/>
                        <Route path={"/movie"} element={<MajorMovie/>}/>
                        <Route path={"/anime"} element={<MajorAnime/>}/>
                        <Route path={"/serial"} element={<MajorSerial/>}/>
                        <Route path={"/my"} element={<My/>}/>
                        <Route path={"/subscribe"} element={<Subscribe/>}/>
                        <Route path={"/notInAccount"} element={<NotInAccount/>}/>
                    </Route>

                    <Route path={"/settings"} element={<Settings/>}/>
                    <Route path={"/settings/subscribe"} element={<SubscribeSettings/>}/>
                    <Route path={"/settings/data"} element={<DataSettings/>}/>
                    <Route path={"/code"} element={<SubscribeCode/>}/>
                    <Route path={"/player/:src"} element={<Player/>}/>

                    <Route path={"/*"} element={<Error errorCode={404} errorShortInfo={"Page not found"}
                                                       errorInfo={"You have incorrect uri"}/>}/>

                    <Route  path={"/error/:errorCode"} element={<ErrorNavigate/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)