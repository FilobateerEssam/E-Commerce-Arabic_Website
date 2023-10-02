import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandsPage from "./Pages/Brand/AllBrandsPage";

function App() {
  return (
    <div className="font">
    <NavBarLogin />

      <BrowserRouter>
        <Routes>
            {/* path="/" Equal index mean home page   */}
          <Route  index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandsPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
