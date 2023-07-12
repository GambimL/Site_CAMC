import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { Schedule } from './pages/schedule';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  )
}