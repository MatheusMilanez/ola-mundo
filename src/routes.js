import Rodape from "componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrado";
import ScrollToTop from "componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>
        {/*
          Na rota "/" , a estrutura a ser renderizada é:

          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

            Na rota "/" , a estrutura a ser renderizada é:

          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>
        */}
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
    );
}

export default AppRoutes;



/* Tem que instalar o npm install react-router-dom@6*/
/* Essa instalação permite que o react utilize rotas sem precisar criar varios arquivos html */