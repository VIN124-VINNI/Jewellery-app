


// import React, { useEffect, useState, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Image from '../components/button/img';
// import { fetchJewelleryByCategory } from '../features/jewelry/category';
// import Navbar from '../components/Navbar/Navbar';

// import {
//   Gem,
//   IndianRupee,
//   CircleDollarSign,
//   Sparkles,
//   Crown,
//   Landmark,
//   Diamond,
//   ChevronDown
// } from 'lucide-react';

// export default function CategoryJewellery() {
//   const dispatch = useDispatch();
//   const { items: jewelleryItems, loading, error } = useSelector((state) => state.category);

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef();

//   const categories = [
//     { label: "All", icon: <Gem size={16} className="mr-2" /> },
//     { label: "Gold", icon: <CircleDollarSign size={16} className="mr-2 text-yellow-500" /> },
//     { label: "Silver", icon: <IndianRupee size={16} className="mr-2 text-gray-500" /> },
//     { label: "Diamond", icon: <Diamond size={16} className="mr-2 text-blue-400" /> },
//     { label: "Bridal", icon: <Crown size={16} className="mr-2 text-pink-500" /> },
//     { label: "Traditional", icon: <Landmark size={16} className="mr-2 text-red-600" /> },
//     { label: "Antique", icon: <Sparkles size={16} className="mr-2 text-amber-700" /> },
//   ];

//   useEffect(() => {
//     if (jewelleryItems.length === 0) {
//       dispatch(fetchJewelleryByCategory());
//     }
//   }, [dispatch, jewelleryItems.length]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const filteredJewellery =
//     selectedCategory === "All"
//       ? jewelleryItems
//       : jewelleryItems.filter((item) =>
//           item.category.toLowerCase() === selectedCategory.toLowerCase()
//         );

//   return (
//     <>
//       <Navbar />
//       <div className="p-4 sm:p-6 pt-20 min-h-screen bg-gray-50">
//         {/* Category Dropdown */}
//         <div className="relative mb-6 w-full max-w-xs mx-auto" ref={dropdownRef}>
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center justify-between"
//           >
//             <span className="flex items-center gap-2">
//               {categories.find((cat) => cat.label === selectedCategory)?.icon}
//               {selectedCategory}
//             </span>
//             <ChevronDown size={18} />
//           </button>

//           {showDropdown && (
//             <ul className="absolute mt-2 bg-white border rounded shadow w-full z-50 max-h-60 overflow-auto">
//               {categories.map((cat) => (
//                 <li
//                   key={cat.label}
//                   onClick={() => {
//                     setSelectedCategory(cat.label);
//                     setShowDropdown(false);
//                   }}
//                   className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                     selectedCategory === cat.label ? "bg-gray-200" : ""
//                   }`}
//                 >
//                   {cat.icon}
//                   {cat.label}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Jewellery Display */}
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-red-500 text-center">{error}</p>
//         ) : filteredJewellery.length === 0 ? (
//           <p className="text-center">No jewellery items found in this category.</p>
//         ) : (
//           <div className="flex flex-wrap gap-4 justify-center">
//             {filteredJewellery.map((item) => (
//               <div
//                 key={item._id}
//                 className="w-full max-w-xs sm:w-[48%] md:w-[30%] lg:w-[22%] p-4 border rounded shadow bg-white hover:shadow-md transition"
//               >
//                 {item.image && (
//                   <div className="relative group w-full overflow-hidden mb-3 rounded-lg">
//                     <Image
//                       path={item.image}
//                       alt={item.name}
//                       styling="w-full h-40 sm:h-48 md:h-56 object-cover rounded transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                 )}
//                 <div className="flex flex-col justify-center items-center text-center">
//                   <h2 className="text-lg font-bold mb-1">{item.name}</h2>
//                   <p className="text-xs text-gray-600 mb-1">
//                     <strong>Category:</strong> {item.category}
//                   </p>
//                   <p className="text-xs text-gray-700 mb-1">
//                     <strong>Description:</strong> {item.description}
//                   </p>
//                   <p className="text-xs text-gray-800">
//                     <strong>Cost:</strong> ₹{item.cost}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from '../components/button/img';
import { fetchJewelleryByCategory } from '../features/jewelry/category';
import Navbar from '../components/Navbar/Navbar';

import {
  Gem,
  IndianRupee,
  CircleDollarSign,
  Sparkles,
  Crown,
  Landmark,
  Diamond,
  ChevronDown
} from 'lucide-react';

export default function CategoryJewellery() {
  const dispatch = useDispatch();
  const { items: jewelleryItems, loading, error } = useSelector((state) => state.category);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const categories = [
    { label: "All", icon: <Gem size={16} className="mr-2" /> },
    { label: "Gold", icon: <CircleDollarSign size={16} className="mr-2 text-yellow-500" /> },
    { label: "Silver", icon: <IndianRupee size={16} className="mr-2 text-gray-500" /> },
    { label: "Diamond", icon: <Diamond size={16} className="mr-2 text-blue-400" /> },
    { label: "Bridal", icon: <Crown size={16} className="mr-2 text-pink-500" /> },
    { label: "Traditional", icon: <Landmark size={16} className="mr-2 text-red-600" /> },
    { label: "Antique", icon: <Sparkles size={16} className="mr-2 text-amber-700" /> },
  ];

  useEffect(() => {
    if (jewelleryItems.length === 0) {
      dispatch(fetchJewelleryByCategory());
    }
  }, [dispatch, jewelleryItems.length]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Normalize category matching
  const filteredJewellery =
    selectedCategory === "All"
      ? jewelleryItems
      : jewelleryItems.filter((item) =>
          item.category?.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-6 pt-20 min-h-screen bg-gray-50">
        {/* Category Dropdown */}
        <div className="relative mb-6 w-full max-w-xs mx-auto" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              {categories.find((cat) => cat.label === selectedCategory)?.icon}
              {selectedCategory}
            </span>
            <ChevronDown size={18} />
          </button>

          {showDropdown && (
            <ul className="absolute mt-2 bg-white border rounded shadow w-full z-50 max-h-60 overflow-auto">
              {categories.map((cat) => (
                <li
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.label);
                    setShowDropdown(false);
                  }}
                  className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedCategory === cat.label ? "bg-gray-200" : ""
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Jewellery Display */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : filteredJewellery.length === 0 ? (
          <p className="text-center">No jewellery items found in this category.</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredJewellery.map((item) => (
              <div
                key={item._id}
                className="w-full max-w-xs sm:w-[48%] md:w-[30%] lg:w-[22%] p-4 border-2 border-yellow-600 rounded-xl shadow bg-white hover:shadow-md transition duration-300"
              >
                {item.image && (
                  <div className="relative group w-full overflow-hidden mb-3 rounded-lg">
                    <Image
                      path={item.image}
                      alt={item.name}
                      styling="w-full h-40 sm:h-48 md:h-56 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="text-lg font-bold mb-1">{item.name}</h2>
                  <p className="text-xs text-gray-600 mb-1">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="text-xs text-gray-700 mb-1">
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p className="text-xs text-gray-800">
                    <strong>Cost:</strong> ₹{item.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}toLowerCase
      </div>
    </>
  );
}

