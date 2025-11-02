import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductSection from "../components/ProductSection.jsx";
import About from "../components/About.jsx";
import Information from "../components/Information.jsx";
import Detail from "../components/Detail.jsx";
import Contact from "../components/Contact.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import QRSticker from "../components/QRSticker.jsx";


function App() {
    return (
        <Router>
            <div className="w-full overflow-hidden">
                <Header />
                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>

                                <ProductSection />
                                <About />
                                <Information />
                                <Detail />
                                <Contact />

                            </>
                        }
                    />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
