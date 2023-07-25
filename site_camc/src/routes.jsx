import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home';
import { Speakers } from './pages/speakers';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/palestrantes" element={<Speakers />} />
    </Routes>
  )
}