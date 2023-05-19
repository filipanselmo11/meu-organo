// import { useState } from 'react'
import Banner from "./componentes/Banner";

function App() {
  return (
    <>
      <div className="App">
        <Banner
          enderecoImagem='/imagens/banner.png'
          textoAlternativo="Banner Principal Organo"
        />
      </div>
    </>
  );
}

export default App;
