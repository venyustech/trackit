import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UserContext from "./Providers/auth";

export default function App() {
    const [userToken, setUserToken] = useState(null);
    const [taskPercentualDone, setTaskPercentualDone] = useState(0);
    const [userImage, setUserImage] = useState('');
    return (
        <UserContext.Provider value={{ userToken, setUserToken, taskPercentualDone, setTaskPercentualDone, userImage, setUserImage }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/historico" element={<HistoricPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}