import { Routes, Route } from "react-router-dom"
import Home from './routes/home/Home'
import NotFound from "./routes/notFound/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
