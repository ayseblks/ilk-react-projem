import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnaSayfa from "./AnaSayfa";
import Hakkimda from "./Hakkimda";
import Projelerim from "./Projelerim";
import "./App.css";
import ProjeDetay from "./ProjeDetay";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#e9dffe", padding: "20px" }}>
      <Header />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/projelerim" element={<Projelerim />} />
        <Route path="/projelerim/:id" element={<ProjeDetay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;