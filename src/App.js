import React from "react";
import Loginform from "./component/Loginform";
import ProductList from "./component/product";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./routers";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <PublicRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
