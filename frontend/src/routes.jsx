import {BrowserRouter, Route, Routes} from "react-router";
import Inicio from "./pages/inicio/inicio";
import Cadastro from "./pages/cadastro/Index";
import Login from "./pages/login/login";
import Agenda from "./pages/agenda/agenda";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                 <Route path="/agenda" element={<Agenda/>}/>
            </Routes>
        </BrowserRouter>
    )
}