

// import React, { useState, useEffect } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/user/loginSlice';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, status, error } = useSelector((state) => state.login);
//   const loading = status === 'loading';

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     // setSubmitted(true);
//     await dispatch(loginUser({ email, password }));
//           alert('Login successful!');
//           // setTimeout(() => {
//             navigate('/AllData'); 
//           // }, timeout);
//   };



//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md w-full p-6 bg-white rounded-lg shadow space-y-6"
//       >
//         <h1 className="text-2xl font-bold text-center text-yellow-600">Login</h1>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           autoComplete="email"
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />

//         <div className="relative">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//           <div
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 cursor-pointer"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 rounded text-white transition duration-300 ${
//             loading ? 'bg-yellow-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'
//           }`}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm">
//           Don't have an account?{' '}
//           <Link to="/" className="text-yellow-600 hover:underline">
//             Sign up here
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;



import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { loginUser } from '../../features/user/loginSlice';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.login);
  const loading = status === 'loading';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser({ email, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate('/AllData');
      }, 1500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: result.payload || 'Invalid email or password!',
        confirmButtonColor: '#d97706',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 bg-white rounded-lg shadow space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-600">Login</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white transition duration-300 ${
            loading ? 'bg-yellow-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center text-sm">
          Don't have an account?{' '}
          <Link to="/" className="text-yellow-600 hover:underline">
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
