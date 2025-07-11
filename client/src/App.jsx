


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/userAuth/Register';
import JewelleryDetailPage from './pages/JewelryDetailPage';
import EditJewellerypage from './pages/EditJewellerypage';
import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
import AllData from './pages/AllData';
import Create from './pages/CreateJewelleryPage';
import Category from './pages/CategoryPage';
import Login from './pages/userAuth/LoginPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Default route for Register */}
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jewellery/:id" element={<JewelleryDetailPage />} />
        <Route path="/edit/:id" element={<EditJewellerypage />} />
        <Route path="/delete/:id" element={<DeleteJewelleryPage />} />
        <Route path="/AllData" element={<AllData />} />
        <Route path="/create" element={<Create />} />
        <Route path="/category" element={<Category />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
