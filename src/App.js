import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
    const [userInput, setUserInput] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage userInput={userInput} setUserInput={setUserInput} />} />
            </Routes>
        </BrowserRouter>
    )
}