import './App.css';
import About from "./components/about/About";
import Dashboard from "./components/dashboard/dashboard";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import StudentDashboard from './pages/student/Dashboard';
import CompanyDashboard from './pages/company/Dashboard';

function App() {
  return (
    <div className={"App"}>
      <Routes>
          <Route path={"/"} element={<StudentDashboard />} />
          <Route path={"/dashboard/student"} element={<StudentDashboard />} />
          <Route path={"/dashboard/company"} element={<CompanyDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
