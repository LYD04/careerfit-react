import { useEffect, useState } from "react";
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
import UploadJD from "./pages/UploadJD.jsx";
import { LogIn } from "lucide-react";
import Login from "./components/Login.jsx";
import { authFetch } from "./util/authFetch.js";

export default function App() {
  const [page, setPage] = useState("landing");
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await authFetch("/auth/me");

        const user = await response.json();

        console.log("User user:", user);

        if (response.status === 401 || !response.ok) {
          setStatus("unauthenticated");
          setUser(null);
          return;
        }

        if (!user) {
          setStatus("unauthenticated");
          setUser(null);
          return;
        }

        setPage("dashboard");
        setUser(user);
        setStatus("authenticated");
      } catch (error) {
        console.error("Authentication check error:", error);
        setStatus("unauthenticated");
        setUser(null);
      }
    };

    checkAuthentication();
  }, []);

  if (page === "landing") {
    return <Landing onStart={() => setPage("dashboard")} />;
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard onNavigate={setPage} user={user} />;
      case "uploadCV":
        return <UploadCV onNavigate={setPage} />;
      case "uploadJD":
        return <UploadJD onNavigate={setPage} />;
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
      {!user && <Login />}
      <Sidebar active={page} onNavigate={setPage} />
      <main className="main-shell">
        <Header user={user} />
        {renderPage()}
        {/* <UploadCV onNavigate={setPage} /> */}
      </main>
    </div>
  );
}
