import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Skills from "./pages/Skills"
export default function App(){
  return (
    <div>
      My portfolio
     <Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
    </div>
  )
} 