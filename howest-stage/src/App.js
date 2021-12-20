import './App.css';
import { Routes, Route } from "react-router-dom";
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './services/msal';
import StudentDashboard from './pages/student/Dashboard';
import CompanyDashboard from './pages/company/Dashboard';
import Home from './pages/Home';
import Legal from "./pages/legal/Legal";
import StudentCompanyInfo from './pages/student/CompanyInfo';
import StudentProfile from './pages/student/Profile';
import React from 'react';

function App() {
    return (
        <MsalProvider instance={msalInstance}>
            <React.StrictMode>
                <div className={"App"}>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/legal"} element={<Legal />} />
                        <Route path={"/dashboard/student"} element={<StudentDashboard />} />
                        <Route path={"/dashboard/company"} element={<CompanyDashboard />} />
                        <Route path={"/company/:id/info"} element={<StudentCompanyInfo />} component={StudentCompanyInfo} />
                        <Route path={"/dashboard/student/profile"} element={<StudentProfile />} component={StudentProfile} />
                    </Routes>
                </div>
            </React.StrictMode>
        </MsalProvider>
    );
}

export default App;
