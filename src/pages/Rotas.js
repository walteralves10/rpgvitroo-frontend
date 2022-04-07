import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import Menu from './menu/Menu';
  import ListaPersonagens from './ListaPersonagens/ListaPersonagens';
  import Mesa from './mesa/Mesa';
  import ListaMesas from './mesa/ListaMesas';

const Rotas = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="mesa" element={<Mesa />} />
          <Route path="lista" element={<ListaPersonagens />} />
          <Route path="listamesas" element={<ListaMesas />} />
        </Routes>
      </BrowserRouter>
    );
};

export default Rotas;