import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Criadores from "./pages/Criadores"
import Funcionamento from "./pages/Funcionamento"
import Objetivo from "./pages/Objetivo"
import Componentes from "./pages/Componentes"


function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Criadores" element={<Criadores />}/>
            <Route path="/Funcionamento" element={<Funcionamento />}/>
            <Route path="/Componentes" element={<Componentes />}/>
            <Route path="/Objetivo" element={<Objetivo />}/>
        </Routes>
    )
}

export default Router