
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchJewelleryData } from '../features/jewelry/AlldataSlice';
// import { useNavigate } from 'react-router-dom';
// import DeleteJewellery from '../pages/DeleteJewelleryPage';
// import Image from '../../src/components/button/img';
// import Navbar from '../components/Navbar/Navbar';

// function AllJewellery() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { items, loading } = useSelector(state => state.Alldata);

//   const [searchInput, setSearchInput] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [openMenuId, setOpenMenuId] = useState(null);

//   // Debounce the search input
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       setSearchQuery(searchInput);
//     }, 500); // 500ms debounce delay

//     return () => clearTimeout(delayDebounce);
//   }, [searchInput]);

//   useEffect(() => {
//     dispatch(fetchJewelleryData());
//   }, [dispatch]);

//   const toggleMenu = (id) => {
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const filteredJewellery = items.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       {/* Pass the searchInput and setter to Navbar */}
//       <Navbar searchQuery={searchInput} setSearchQuery={setSearchInput} />

//       <h1 className="text-2xl font-bold mb-4 text-center pt-30">All Jewellery</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="flex flex-wrap gap-4 justify-center">
//           {filteredJewellery.length > 0 ? (
//             filteredJewellery.map(item => (
//               <div
//                 key={item?._id}
//                 className="w-full md:w-[28%] border-2 p-4 rounded shadow relative"
//               >
//                 <div className="absolute top-2 right-2">
//                   <button onClick={() => toggleMenu(item._id)} className="text-xl">⋮</button>
//                   {openMenuId === item._id && (
//                     <div className="absolute right-0 mt-2 w-32 bg-white border shadow rounded z-10 flex flex-col">
//                       <button
//                         onClick={() => navigate(`/edit/${item._id}`, { state: item })}
//                         className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-purple-600"
//                       >
//                         Edit
//                       </button>
//                       <DeleteJewellery id={item._id} />
//                     </div>
//                   )}
//                 </div>

//                 <Image path={item?.image} alt={item?.name} styling="w-full h-64 object-cover rounded mb-2" />
//                 <h2 className="text-xl font-semibold text-center">{item?.name}</h2>
//                 <p className="text-sm text-gray-600 text-center">{item?.category}</p>
//                 <p className="mt-2 text-gray-800 text-center">Cost: ₹{item?.cost}</p>
//                 <p className="mt-1 text-sm text-gray-500 text-center">Editor: {item?.editor}</p>
//                 <div className="flex justify-center">
//                   <button
//                     onClick={() => navigate(`/Jewellery/${item._id}`)}
//                     className="mt-4 mb-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">
//               No jewellery found for "{searchQuery}"
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllJewellery;



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJewelleryData } from '../features/jewelry/AlldataSlice';
import { useNavigate } from 'react-router-dom';
import DeleteJewellery from '../pages/DeleteJewelleryPage';
import Image from '../../src/components/button/img';
import Navbar from '../components/Navbar/Navbar';

function AllJewellery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading } = useSelector(state => state.Alldata);

  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  useEffect(() => {
    dispatch(fetchJewelleryData());
  }, [dispatch]);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const filteredJewellery = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 pt-2">
      {/* Navbar */}
      <Navbar searchQuery={searchInput} setSearchQuery={setSearchInput} />

      {/* Title */}
      <h1 className="text-2xl font-bold text-center my-6">All Jewellery</h1>

      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {filteredJewellery.length > 0 ? (
            filteredJewellery.map(item => (
              <div
                key={item?._id}
                className="w-full md:w-[28%] border-2 border-gray-300 p-3 rounded shadow relative hover:shadow-lg transition-all"
              >
                <div className="absolute top-2 right-2">
                  <button onClick={() => toggleMenu(item._id)} className="text-xl">⋮</button>
                  {openMenuId === item._id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border shadow rounded z-10 flex flex-col">
                      <button
                        onClick={() => navigate(`/edit/${item._id}`, { state: item })}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                      >
                        Edit
                      </button>
                      <DeleteJewellery id={item._id} />
                    </div>
                  )}
                </div>

                <Image path={item?.image} alt={item?.name} styling="w-full h-60 object-cover rounded mb-2 hover:scale-105 transition-transform duration-300" />
                <h2 className="text-xl font-semibold text-center">{item?.name}</h2>
                <p className="text-sm text-gray-600 text-center">{item?.category}</p>
                <p className="mt-1 text-gray-800 text-center">Cost: ₹{item?.cost}</p>
                <p className="text-sm text-gray-500 text-center">Editor: {item?.editor}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate(`/Jewellery/${item._id}`)}
                    className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No jewellery found for "{searchQuery}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AllJewellery;
