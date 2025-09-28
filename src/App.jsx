
import Products from "../components/Products";
import Header from "../components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import {ProductSection} from "../components/ProductSection.jsx";




function App() {


    return (
      <div className="w-full overflow-hidden">
<<<<<<< Updated upstream
          <Header/>
          <ProductSection/>
          <About/>
=======

          <Router>
              <Header/>
              <ProductSection/>

              <Routes>


                  <Route path="/product/:id" element={<ProductDetail/>} />
              </Routes>
          </Router>
          <About/>


>>>>>>> Stashed changes

      </div>
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Products />} />
        //         <Route path="/product/:id" element={<ProductDetail />} />
        //     </Routes>
        // </Router>
    );
}

export default App
