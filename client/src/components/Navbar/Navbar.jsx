// // // // // import React from 'react';
// // // // // import { Link, useNavigate } from 'react-router-dom';

// // // // // const Navbar = ({ searchQuery, setSearchQuery }) => {
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogout = () => {
// // // // //     const confirmed = window.confirm("Are you sure you want to logout?");
// // // // //     if (confirmed) {
// // // // //       navigate('/login');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <nav className="flex items-center justify-between bg-white p-4 shadow">
// // // // //       <div className="flex space-x-6 font-semibold text-lg">
// // // // //         <Link to="/AllData" className="hover:text-yellow-600">All Jewellery</Link>
// // // // //         <Link to="/category" className="hover:text-yellow-600">Categories</Link>
// // // // //         <Link to="/create" className="hover:text-yellow-600">Add Jewellery</Link>
// // // // //       </div>

// // // // //       <div className="flex items-center space-x-4">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search jewellery..."
// // // // //           value={searchQuery}
// // // // //           onChange={e => setSearchQuery(e.target.value)}
// // // // //           className="border rounded px-3 py-1"
// // // // //         />

// // // // //         <button
// // // // //           onClick={handleLogout}
// // // // //           className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
// // // // //         >
// // // // //           Logout
// // // // //         </button>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;



// // // // import React from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';

// // // // const Navbar = ({ searchQuery, setSearchQuery }) => {
// // // //   const navigate = useNavigate();

// // // //   const handleLogout = () => {
// // // //     const confirmed = window.confirm("Are you sure you want to logout?");
// // // //     if (confirmed) {
// // // //       navigate('/login');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <nav className="bg-white shadow p-4">
// // // //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// // // //         {/* Navigation Links */}
// // // //         <div className="flex flex-col md:flex-row items-center gap-3 font-semibold text-base sm:text-lg">
// // // //           <Link to="/AllData" className="hover:text-yellow-600">All Jewellery</Link>
// // // //           <Link to="/category" className="hover:text-yellow-600">Categories</Link>
// // // //           <Link to="/create" className="hover:text-yellow-600">Add Jewellery</Link>
// // // //         </div>

// // // //         {/* Search + Logout */}
// // // //         <div className="flex flex-col sm:flex-row items-center gap-3">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search jewellery..."
// // // //             value={searchQuery}
// // // //             onChange={e => setSearchQuery(e.target.value)}
// // // //             className="border rounded px-3 py-1 w-full sm:w-auto"
// // // //           />

// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full sm:w-auto"
// // // //           >
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { Menu, X } from 'lucide-react'; // optional, you can use emoji if needed

// // // const Navbar = ({ searchQuery, setSearchQuery }) => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     if (window.confirm("Are you sure you want to logout?")) {
// // //       navigate('/login');
// // //     }
// // //   };

// // //   return (
// // //     <nav className="bg-white shadow-md px-4 py-3">
// // //       {/* Top Row */}
// // //       <div className="flex justify-between items-center">
// // //         {/* Hamburger Icon (mobile only) */}
// // //         <button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="md:hidden focus:outline-none"
// // //         >
// // //           {isOpen ? <X size={24} /> : <Menu size={24} />}
// // //         </button>

// // //         {/* Desktop Nav Items */}
// // //         <div className="hidden md:flex md:items-center md:space-x-6 font-semibold text-base">
// // //           <Link to="/AllData" className="hover:text-yellow-600">All Jewellery</Link>
// // //           <Link to="/category" className="hover:text-yellow-600">Categories</Link>
// // //           <Link to="/create" className="hover:text-yellow-600">Add Jewellery</Link>
// // //         </div>

// // //         {/* Desktop Search + Logout */}
// // //         <div className="hidden md:flex md:items-center md:space-x-4">
// // //           <input
// // //             type="text"
// // //             placeholder="Search..."
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             className="border px-3 py-1 rounded w-48"
// // //           />
// // //           <button
// // //             onClick={handleLogout}
// // //             className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Dropdown Menu */}
// // //       {isOpen && (
// // //         <div className="flex flex-col mt-4 space-y-3 md:hidden">
// // //           <Link to="/AllData" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">All Jewellery</Link>
// // //           <Link to="/category" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">Categories</Link>
// // //           <Link to="/create" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">Add Jewellery</Link>

// // //           <input
// // //             type="text"
// // //             placeholder="Search..."
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             className="border px-3 py-1 rounded"
// // //           />
// // //           <button
// // //             onClick={() => {
// // //               handleLogout();
// // //               setIsOpen(false);
// // //             }}
// // //             className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
// // //           >
// // //             Logout
// // //           </button>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import Swal from 'sweetalert2';

// // const Navbar = ({ searchQuery, setSearchQuery }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     Swal.fire({
// //       title: 'Are you sure you want to logout?',
// //       showCancelButton: true,
// //       confirmButtonText: 'Yes',
// //       cancelButtonText: 'Cancel',
// //       confirmButtonColor: '#e3342f',
// //       cancelButtonColor: '#d3d3d3',
// //       icon: 'warning',
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         toast.success('Logged out successfully!');
// //         setTimeout(() => {
// //           navigate('/login');
// //         }, 1500); // delay for toast
// //       }
// //     });
// //   };

// //   return (
// //     <nav className="flex justify-between items-center bg-white shadow p-4">
// //       <div className="flex space-x-6 text-lg font-medium">
// //         <a href="/AllData">All Jewellery</a>
// //         <a href="/category">Categories</a>
// //         <a href="/create">Add Jewellery</a>
// //       </div>

// //       <div className="flex items-center space-x-4">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="border border-gray-300 px-4 py-1 rounded"
// //         />
// //         <button
// //           onClick={handleLogout}
// //           className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';

// const Navbar = ({ searchQuery, setSearchQuery }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Swal.fire({
//       title: 'Are you sure you want to logout?',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'Cancel',
//       confirmButtonColor: '#e3342f',
//       cancelButtonColor: '#d3d3d3',
//       icon: 'warning',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         toast.success('Logged out successfully!');
//         setTimeout(() => {
//           navigate('/login');
//         }, 1500);
//       }
//     });
//   };

//   return (
//     <nav className="flex justify-between items-center bg-white shadow p-4">
//       <div className="flex space-x-6 text-lg font-medium">
//         <Link to="/AllData" className="hover:text-yellow-600">All Jewellery</Link>
//         <Link to="/category" className="hover:text-yellow-600">Categories</Link>
//         <Link to="/create" className="hover:text-yellow-600">Add Jewellery</Link>
//       </div>

//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 px-4 py-1 rounded"
//         />
//         <button
//           onClick={handleLogout}
//           className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Menu, X } from 'lucide-react'; // icons for hamburger menu

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#d3d3d3',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success('Logged out successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      }
    });
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden lg:flex space-x-6 text-lg font-medium">
            <Link to="/AllData" className="hover:text-yellow-600">All Jewellery</Link>
            <Link to="/category" className="hover:text-yellow-600">Categories</Link>
            <Link to="/create" className="hover:text-yellow-600">Add Jewellery</Link>
          </div>
        </div>

        {/* Search + Logout (desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-1 rounded"
          />
          <button
            onClick={handleLogout}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <div className="flex flex-col gap-2 text-base font-medium">
            <Link to="/AllData" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>All Jewellery</Link>
            <Link to="/category" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link to="/create" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>Add Jewellery</Link>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 px-4 py-1 rounded"
            />
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
