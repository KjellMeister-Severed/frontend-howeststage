import './App.css';
import About from "./components/about/About";
import Dashboard from "./components/dashboard/dashboard";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./components/dashboard/student/StudentDashboard";
import CompanyDashboard from "./components/dashboard/CompanyDashboard";

const Test = () => {
    return (
        <div>
            hallo
        </div>
    )
}

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
