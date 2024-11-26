import {React, useEffect} from "react";
import Contactus from "./components/Contact/Contactus";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import { initGA, logPageView } from './analytics';

function App(){
  useEffect(() => {
    initGA();
    logPageView();
}, []);

  return (
    <>
    <Home />
    <Product />
    <Contactus />

    </>
    
  )
}

export default App;