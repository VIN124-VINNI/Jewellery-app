


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Register from './pages/userAuth/Register';
// import JewelleryDetailPage from './pages/JewelryDetailPage';
// import EditJewellerypage from './pages/EditJewellerypage';
// import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
// import AllData from './pages/AllData';
// import Create from './pages/CreateJewelleryPage';
// import Category from './pages/CategoryPage';
// import Login from './pages/userAuth/LoginPage';
// import Navbar from './components/Navbar/Navbar';

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Register />} /> {/* Default route for Register */}
//         <Route path="/Navbar" element={<Navbar />} />
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/jewellery/:id" element={<JewelleryDetailPage />} />
//         <Route path="/edit/:id" element={<EditJewellerypage />} />
//         <Route path="/delete/:id" element={<DeleteJewelleryPage />} />
//         <Route path="/AllData" element={<AllData />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/category" element={<Category />} />
//       </Routes>

//       <ToastContainer position="top-center" autoClose={2000} />
//     </>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/verify', { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const Protected = ({ children }) => {
    if (isAuthenticated === null) {
      return <div className="text-center mt-10 text-xl">Loading...</div>;
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/Navbar" element={<Protected><Navbar /></Protected>} />
        <Route path="/jewellery/:id" element={<Protected><JewelleryDetailPage /></Protected>} />
        <Route path="/edit/:id" element={<Protected><EditJewellerypage /></Protected>} />
        <Route path="/delete/:id" element={<Protected><DeleteJewelleryPage /></Protected>} />
        <Route path="/AllData" element={<Protected><AllData /></Protected>} />
        <Route path="/create" element={<Protected><Create /></Protected>} />
        <Route path="/category" element={<Protected><Category /></Protected>} />
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
