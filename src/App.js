import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./components/HistoricPage";


export default function App() {
    const [userToken, setUserToken] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setUserToken={setUserToken} />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/hoje" element={<TodayPage userToken={userToken} />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/historico" element={<HistoricPage />} />

            </Routes>
        </BrowserRouter>
    )
}