import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home";
import { Speakers } from "./pages/speakers";
import { NotFound } from "./components/NotFound";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Site_CAMC" element={<Home />} />
      <Route path="/Site_CAMC/palestrantes" element={<Speakers />} />
    </Routes>
  )
}