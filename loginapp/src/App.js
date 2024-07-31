import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route index element={<Home />}></Route>
          {/* <Route path="/product" element={<Product />}></Route> */}
          {/* <Route path="/detail/:id" element={<ProductDetail />}></Route> */}
          {/* <Route path="/ShowCart" element={<ShowCart />}></Route>
          <Route path="/ShowCats" element={<ShowCats />}></Route> */}
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
