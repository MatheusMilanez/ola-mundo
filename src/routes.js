import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div><h1>Pagina não encontrada!</h1></div>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;



/* Tem que instalar o npm install react-router-dom@6*/
/* Essa instalação permite que o react utilize rotas sem precisar criar varios arquivos html */