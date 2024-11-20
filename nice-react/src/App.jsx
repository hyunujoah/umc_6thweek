// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Register from "./Register";
import Login from "./Login";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage"; // SearchPage 임포트

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<SearchPage />} /> {/* SearchPage 라우트 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
