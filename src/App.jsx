import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Beranda from "./pages/Beranda";
import TambahPage from "./pages/TambahPage";
import { RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage";
import EditPage from "./pages/EditPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/tambah" element={<TambahPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
