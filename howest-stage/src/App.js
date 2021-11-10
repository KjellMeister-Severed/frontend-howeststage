import './App.css';
import { Routes, Route } from "react-router-dom";
import StudentDashboard from './pages/student/Dashboard';
import CompanyDashboard from './pages/company/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className={"App"}>
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/dashboard/student"} element={<StudentDashboard />} />
          <Route path={"/dashboard/company"} element={<CompanyDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
