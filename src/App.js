import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function App() {
    const [userToken, setUserToken] = useState(null);
    const [taskPercentualDone, setTaskPercentualDone] = useState(0);
    const [userInfos, setUserInfos] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setUserToken={setUserToken} setUserInfos={setUserInfos} />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/hoje" element={<TodayPage userToken={userToken} taskPercentualDone={taskPercentualDone} setTaskPercentualDone={setTaskPercentualDone} userInfos={userInfos} />} />
                <Route path="/habitos" element={<HabitsPage userToken={userToken} taskPercentualDone={taskPercentualDone} userInfos={userInfos} />} />
                <Route path="/historico" element={<HistoricPage taskPercentualDone={taskPercentualDone} userInfos={userInfos} />} />
            </Routes>
        </BrowserRouter>
    )
}