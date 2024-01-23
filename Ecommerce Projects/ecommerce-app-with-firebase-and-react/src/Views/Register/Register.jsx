import react, { useState } from 'react'
import background from '../../assets/bg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../Config/Firebase/firebase';

function Register() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const signUpHua = () => {
    signUp({ firstName, LastName, email, password })
  }


  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={background}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="bg-white p-8 rounded-xl bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border shadow-lg max-w-md w-full space-y-4 relative z-10">
        <h2 className="text-3xl font-extrabold text-left bg-gradient-to-r from-yellow-100 to-purple-900 text-transparent bg-clip-text">Sign Up</h2>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="FirstName"
                name="FirstName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="LastName"
                name="LastName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="********"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-900 p-3 rounded-md text-white font-semibold"
            onClick={signUpHua}
          >
            Create your account
          </button>
          <p className='text-center text-sml text-left text-blue-900 m-2'>Already Have an Account <Link to="/login" className='cursor-pointer font-bold text-blue-600'>Login.</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
