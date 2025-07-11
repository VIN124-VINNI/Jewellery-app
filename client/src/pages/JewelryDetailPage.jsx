


// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSingleJewellery } from '../features/jewelry/SingleProductSlice';

// function SingleJewellery() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { singleJewellery, loading, error } = useSelector((state) => state.singleProduct);

//   console.log(singleJewellery,'singleProduct')
//   useEffect(() => {
//     if (id) {
//       dispatch(fetchSingleJewellery(id));
//     }
//   }, [dispatch, id]);

//   if (loading) return <p className="text-center mt-10">Loading jewellery item...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
//   if (!singleJewellery) return <p className="text-center mt-10">Jewellery item not found</p>;

//   return (
//     <div className="p-6 max-w-2xl mx-auto text-center pt-10">
//       <img
//         src={singleJewellery.image}
//         alt={singleJewellery.name}
//         className="w-[450px] h-96 object-cover rounded mb-4 mx-auto"
//       />
//       <h1 className="text-3xl font-bold">{singleJewellery.name}</h1>
//       <p className="text-lg text-gray-700 mt-2">Category: {singleJewellery.category}</p>
//       <p className="text-lg mt-2">Cost: ₹{singleJewellery.cost}</p>
//       <p className="text-sm text-gray-500 mt-1">By: {singleJewellery.editor}</p>

//       <h2 className="text-xl font-semibold mt-6">Description:</h2>
//       <p className="mt-2 text-gray-800">{singleJewellery.description}</p>
//     </div>
//   );
// }

// export default SingleJewellery;



import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleJewellery } from '../features/jewelry/SingleProductSlice';

function SingleJewellery() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleJewellery, loading, error } = useSelector((state) => state.singleProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleJewellery(id));
    }
  }, [dispatch, id]);

  if (loading)
    return <p className="text-center mt-10 text-base sm:text-lg">Loading jewellery item...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500 text-base sm:text-lg">Error: {error}</p>;

  if (!singleJewellery)
    return <p className="text-center mt-10 text-base sm:text-lg">Jewellery item not found</p>;

  return (
    <div className="p-4 sm:p-6  m-20 max-w-full sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto text-center pt-10">
      <img
        src={singleJewellery.image}
        alt={singleJewellery.name}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded mb-4"
      />

      <h1 className="text-2xl sm:text-3xl font-bold">{singleJewellery.name}</h1>

      <p className="text-sm sm:text-base text-gray-700 mt-2">
        <strong>Category:</strong> {singleJewellery.category}
      </p>

      <p className="text-sm sm:text-base mt-2">
        <strong>Cost:</strong> ₹{singleJewellery.cost}
      </p>

      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        <strong>By:</strong> {singleJewellery.editor}
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mt-6">Description:</h2>
      <p className="mt-2 text-sm sm:text-base text-gray-800">{singleJewellery.description}</p>
    </div>
  );
}

export default SingleJewellery;

