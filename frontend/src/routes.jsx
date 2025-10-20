import {BrowserRouter, Route, Routes} from "react-router";
import Inicio from "./pages/inicio/Inicio";
import Cadastro from "./pages/cadastro/Index";
import Login from "./pages/login/login";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}