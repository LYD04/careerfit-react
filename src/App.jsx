import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UploadCV from "./pages/UploadCV.jsx";
import Analysis from "./pages/Analysis.jsx";
import Improvement from "./pages/Improvement.jsx";
import Interview from "./pages/Interview.jsx";
import Applications from "./pages/Applications.jsx";
import Profile from "./pages/Profile.jsx";
import { user } from "./data/mockData.js";

export default function App() {
  const [page, setPage] = useState("landing");

  // if (page === "landing") {
  //   return <Landing onStart={() => setPage("dashboard")} />;
  // }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard onNavigate={setPage} />;
      case "upload":
        return <UploadCV onNavigate={setPage} />;
      case "analysis":
        return <Analysis onNavigate={setPage} />;
      case "improvement":
        return <Improvement onNavigate={setPage} />;
      case "interview":
        return <Interview />;
      case "applications":
        return <Applications />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Profile />;
      default:
        return <Dashboard onNavigate={setPage} />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar active={page} onNavigate={setPage} />
      <main className="main-shell">
        <Header user={user} />
        {/* {renderPage()} */}
        <Dashboard onNavigate={setPage} />;
      </main>
    </div>
  );
}
