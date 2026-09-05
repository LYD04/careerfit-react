import { Search } from "lucide-react";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { authFetch } from "../util/authFetch";

export default function Header({ user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const HandleLogout = async () => {
  //   console.log("Logging out...");
  //   try {
  //     const response = await authFetch("/auth/logout", {
  //       method: "POST",
  //     });

  //     if (response.ok) {
  //       window.location.href = "/"; // Redirect to the landing page after logout
  //     } else {
  //       console.error("Logout failed");
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
  // };

  const HandleLogout = async () => {
    try {
      const response = await authFetch("/auth/logout", {
        method: "POST",
      });

      console.log("logout status:", response.status);
      console.log("logout response:", await response.text());

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="topbar">
      {/* <div className="search-box">
        <Search size={18} />
        <input placeholder="Search applications..." />
      </div> */}
      <div
        className="profile-wrapper"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div className="avatar" aria-label="User profile">
          {user?.name?.slice(0, 1)}
        </div>

        {dropdownOpen && (
          <div className="dropdown">
            <ul>
              <li onClick={HandleLogout}>
                <LogOut size={20} className="mr-2" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
