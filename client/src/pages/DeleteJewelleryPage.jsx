import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJewellery } from '../features/jewelry/DeleteSlice';

function DeleteJewellery({ id }) {
  const dispatch = useDispatch();
  const { loading, successMessage, error } = useSelector((state) => state.delete);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await dispatch(deleteJewellery(id)).unwrap();
      setShowModal(false);
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };
  useEffect(() => {
    if (successMessage) {
      setShowModal(false);
    }
  }, [successMessage]);

  const renderError = () => {
    if (!error) return null;
    if (typeof error === 'string') return <p className="text-red-500 mt-3">{error}</p>;
    if (typeof error === 'object' && error.message) return <p className="text-red-500 mt-3">{error.message}</p>;
    return <p className="text-red-500 mt-3">An error occurred.</p>;
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex justify-center text-center px-3 py-1 text-red-600 hover:text-white hover:bg-red-600 transition rounded"
      >
        Delete
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-red-600">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this jewellery item?</p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>

            {renderError()}
            {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteJewellery;