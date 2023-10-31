import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home";
import { Speakers } from "./pages/speakers";
import { NotFound } from "./components/NotFound";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/palestrantes" element={<Speakers />} />
    </Routes>
  )
}