// src/SearchPage.js
import { useState } from "react";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // 여기에 검색 기능을 추가할 수 있습니다.
    console.log("검색어:", searchTerm);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <input
        type="text"
        placeholder="영화 제목을 입력해주세요..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#FF3366",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchPage;
