


// // // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // // import { ToastContainer } from 'react-toastify';
// // // // import 'react-toastify/dist/ReactToastify.css';
// // // // import Register from './pages/userAuth/Register';
// // // // import JewelleryDetailPage from './pages/JewelryDetailPage';
// // // // import EditJewellerypage from './pages/EditJewellerypage';
// // // // import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
// // // // import AllData from './pages/AllData';
// // // // import Create from './pages/CreateJewelleryPage';
// // // // import Category from './pages/CategoryPage';
// // // // import Login from './pages/userAuth/LoginPage';
// // // // import Navbar from './components/Navbar/Navbar';

// // // // const App = () => {
// // // //   return (
// // // //     <>
// // // //       <Routes>
// // // //         <Route path="/Navbar" element={<Navbar />} />
// // // //         <Route path="/" element={<Register />} />
// // // //         <Route path="/login" element={<Login />} />
// // // //         <Route path="/jewellery/:id" element={<JewelleryDetailPage />} />
// // // //         <Route path="/edit/:id" element={<EditJewellerypage />} />
// // // //         <Route path="/delete/:id" element={<DeleteJewelleryPage />} />
// // // //         <Route path="/AllData" element={<AllData />} />
// // // //         <Route path="/create" element={<Create />} />
// // // //         <Route path="/category" element={<Category />} />
// // // //       </Routes>

// // // //       <ToastContainer position="top-center" autoClose={2000} />
// // // //     </>
// // // //   );
// // // // };

// // // // export default App;



// // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import { ToastContainer } from 'react-toastify';
// // // import { useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { verifyUser } from './features/user/loginSlice';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // // Pages
// // // import Register from './pages/userAuth/Register';
// // // import JewelleryDetailPage from './pages/JewelryDetailPage';
// // // import EditJewellerypage from './pages/EditJewellerypage';
// // // import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
// // // import AllData from './pages/AllData';
// // // import Create from './pages/CreateJewelleryPage';
// // // import Category from './pages/CategoryPage';
// // // import Login from './pages/userAuth/LoginPage';
// // // import Navbar from './components/Navbar/Navbar';

// // // const ProtectedRoute = ({ children }) => {
// // //   const { success, loading } = useSelector((state) => state.login);

// // //   if (loading) return <div className="text-center mt-10">Checking session...</div>;

// // //   return success ? children : <Navigate to="/login" />;
// // // };

// // // const App = () => {
// // //   const dispatch = useDispatch();

// // //   useEffect(() => {
// // //     dispatch(verifyUser()); // ✅ verifies login from cookie
// // //   }, [dispatch]);

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Public Routes */}
// // //         <Route path="/" element={<Register />} />
// // //         <Route path="/login" element={<Login />} />

// // //         {/* Protected Routes */}
// // //         <Route path="/Navbar" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
// // //         <Route path="/jewellery/:id" element={<ProtectedRoute><JewelleryDetailPage /></ProtectedRoute>} />
// // //         <Route path="/edit/:id" element={<ProtectedRoute><EditJewellerypage /></ProtectedRoute>} />
// // //         <Route path="/delete/:id" element={<ProtectedRoute><DeleteJewelleryPage /></ProtectedRoute>} />
// // //         <Route path="/AllData" element={<ProtectedRoute><AllData /></ProtectedRoute>} />
// // //         <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
// // //         <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
// // //       </Routes>

// // //       <ToastContainer position="top-center" autoClose={2000} />
// // //     </Router>
// // //   );
// // // };

// // // export default App;



// // // src/App.jsx
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import { ToastContainer } from 'react-toastify';
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { verifyUser } from './features/user/loginSlice';
// // import 'react-toastify/dist/ReactToastify.css';

// // // Pages
// // import Register from './pages/userAuth/Register';
// // import Login from './pages/userAuth/LoginPage';
// // import Navbar from './components/Navbar/Navbar';
// // import AllData from './pages/AllData';
// // import Create from './pages/CreateJewelleryPage';
// // import EditJewellerypage from './pages/EditJewellerypage';
// // import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
// // import JewelleryDetailPage from './pages/JewelryDetailPage';
// // import Category from './pages/CategoryPage';

// // const ProtectedRoute = ({ children }) => {
// //   const { success, loading } = useSelector((state) => state.login);
// //   if (loading) return <div className="text-center mt-10">Checking session...</div>;
// //   return success ? children : <Navigate to="/login" />;
// // };

// // const App = () => {
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(verifyUser());
// //   }, [dispatch]);

// //   return (
// //     <>
// //       <Routes>
// //         {/* Public */}
// //         <Route path="/" element={<Register />} />
// //         <Route path="/login" element={<Login />} />

// //         {/* Protected */}
// //         <Route path="/Navbar" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
// //         <Route path="/jewellery/:id" element={<ProtectedRoute><JewelleryDetailPage /></ProtectedRoute>} />
// //         <Route path="/edit/:id" element={<ProtectedRoute><EditJewellerypage /></ProtectedRoute>} />
// //         <Route path="/delete/:id" element={<ProtectedRoute><DeleteJewelleryPage /></ProtectedRoute>} />
// //         <Route path="/AllData" element={<ProtectedRoute><AllData /></ProtectedRoute>} />
// //         <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
// //         <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
// //       </Routes>

// //       <ToastContainer position="top-center" autoClose={2000} />
// //     </>
// //   );
// // };

// // export default App;



// // src/App.jsx
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';

// // Pages
// import Register from './pages/userAuth/Register';
// import Login from './pages/userAuth/LoginPage';
// import Navbar from './components/Navbar/Navbar';
// import AllData from './pages/AllData';
// import Create from './pages/CreateJewelleryPage';
// import EditJewellerypage from './pages/EditJewellerypage';
// import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
// import JewelleryDetailPage from './pages/JewelryDetailPage';
// import Category from './pages/CategoryPage';

// // 🔐 Simple protected route wrapper using Redux state
// const ProtectedRoute = ({ children }) => {
//   const { success, loading } = useSelector((state) => state.login);

//   if (loading) return <div className="text-center mt-10">Checking session...</div>;
//   return success ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes */}
//         <Route path="/Navbar" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
//         <Route path="/jewellery/:id" element={<ProtectedRoute><JewelleryDetailPage /></ProtectedRoute>} />
//         <Route path="/edit/:id" element={<ProtectedRoute><EditJewellerypage /></ProtectedRoute>} />
//         <Route path="/delete/:id" element={<ProtectedRoute><DeleteJewelleryPage /></ProtectedRoute>} />
//         <Route path="/AllData" element={<ProtectedRoute><AllData /></ProtectedRoute>} />
//         <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
//         <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
//       </Routes>

//       <ToastContainer position="top-center" autoClose={2000} />
//     </>
//   );
// };

// export default App;



import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cookies from 'js-cookie'; // ✅ Import Cookies
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Register from './pages/userAuth/Register';
import Login from './pages/userAuth/LoginPage';
import Navbar from './components/Navbar/Navbar';
import AllData from './pages/AllData';
import Create from './pages/CreateJewelleryPage';
import EditJewellerypage from './pages/EditJewellerypage';
import DeleteJewelleryPage from './pages/DeleteJewelleryPage';
import JewelleryDetailPage from './pages/JewelryDetailPage';
import Category from './pages/CategoryPage';

// 🔐 Simple protected route wrapper using Redux state
const ProtectedRoute = ({ children }) => {
  const { success, loading } = useSelector((state) => state.login);

  if (loading) return <div className="text-center mt-10">Checking session...</div>;
  return success ? children : <Navigate to="/login" />;
};

const App = () => {
  useEffect(() => {
    // ✅ Get user ID from cookie (if available)
    const userId = Cookies.get('userId');
    console.log('User ID from cookie:', userId);
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/Navbar" element={<ProtectedRoute><Navbar /></ProtectedRoute>} />
        <Route path="/jewellery/:id" element={<ProtectedRoute><JewelleryDetailPage /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><EditJewellerypage /></ProtectedRoute>} />
        <Route path="/delete/:id" element={<ProtectedRoute><DeleteJewelleryPage /></ProtectedRoute>} />
        <Route path="/AllData" element={<ProtectedRoute><AllData /></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
        <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;

