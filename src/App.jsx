
import Products from "../components/Products";
import Header from "../components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import ProductSection from "../components/ProductSection.jsx";
import Contact from "../components/Contact.jsx";
import Information from "../components/Information.jsx";
import Production from "../components/Production.jsx";
import Detail from "../components/Detail.jsx";




function App() {


    return (
      <div className="w-full overflow-hidden">
          <Header/>
          <ProductSection/>
          <About/>
          <Information/>
          <Detail/>
          <Contact/>


          <Router>
              <Routes>
                  <Route path="/product/:id" element={<ProductDetail/>} />
              </Routes>
          </Router>


      </div>

    );
}

export default App
