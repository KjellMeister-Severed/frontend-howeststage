import './App.css';
import  Home  from './pages/Home'
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import StudentDashboard from './pages/student/dashboard';
import CompanyDashboard from './pages/company/dashboard';

function App() {
  return (
    <div className={"App"}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="/student/dashboard" element={<StudentDashboard/>} />
        <Route path="/company/dashboard" element={<CompanyDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
