


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/user/signupSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.signup);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(registerUser(formData));

    if (result.meta.requestStatus === 'fulfilled') {
      Swal.fire({
        icon: 'success',
        title: 'Signup successful!',
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Signup failed',
        text: result.payload || 'Please try again.',
        confirmButtonColor: '#d97706',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-orange-700">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded-md transition ${
            loading ? 'bg-orange-300' : 'bg-orange-700 hover:bg-orange-800'
          }`}
        >
          {loading ? 'Registering...' : 'Sign Up'}
        </button>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-600 hover:underline">
            Go to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;



