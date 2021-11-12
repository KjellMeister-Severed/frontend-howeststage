import './App.css';
import { Routes, Route } from "react-router-dom";
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './services/msal';
import StudentDashboard from './pages/student/Dashboard';
import CompanyDashboard from './pages/company/Dashboard';
import Home from './pages/Home';
import Legal from "./pages/legal/Legal";

function App() {
  return (
    <MsalProvider instance={ msalInstance }>
      <div className={"App"}>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/legal"} element={<Legal/>} />
            <Route path={"/dashboard/student"} element={<StudentDashboard />} />
            <Route path={"/dashboard/company"} element={<CompanyDashboard />} />
        </Routes>
      </div>
    </MsalProvider>
  );
}

export default App;
