import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal/AuthModal.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Header onOpenAuth={() => setIsModalOpen(true)} />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
