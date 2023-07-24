import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home';
import { Palestrantes } from './pages/palestrantes'
import { Schedule } from './pages/schedule';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Palestrantes" element={<Palestrantes />} />
    </Routes>
  )
}