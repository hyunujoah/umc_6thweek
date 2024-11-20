// src/RootLayout.js
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// src/RootLayout.jsx
import Navbar from "./Navbar";
import axios from "axios";

function RootLayout() {
  const [user, setUser] = useState(null);

  // 유저 정보 불러오기
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("AccessToken");
      if (token) {
        try {
          const response = await axios.get("/api/user/info", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const email = response.data.email;
          const nickname = email.split("@")[0];
          setUser(nickname);
        } catch (error) {
          console.error("유저 정보를 불러올 수 없습니다.");
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
