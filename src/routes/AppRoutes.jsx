import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
// import ProductDetail from "../pages/ProductDetail";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductListing />} />
                {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
            </Routes>
        </BrowserRouter>
    );
};
