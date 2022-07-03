import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import ComplainPage from './pages/ComplainPage';
import CategoryPage from './pages/CategoryPage';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/Register';
import EditCategory from './pages/EditCategory';
import EditProduct from './pages/EditProduct';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/home" element={<HomePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
