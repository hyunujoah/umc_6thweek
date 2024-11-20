// src/Navbar.js
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">YONGCHA</Link>
      <Link to="/search">찾기</Link>
      <Link to="/movies">영화</Link>
      {user ? (
        <>
          <span>{user}님 반갑습니다.</span>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
