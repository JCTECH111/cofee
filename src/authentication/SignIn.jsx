import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg max-w-md w-full h-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign In</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-gray-700">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-sm text-brown-600 hover:underline">Forgot password?</a>
            </div>
          </div>

          {/* Fix the Sign In button by using Link from react-router-dom */}
          <Link
            to="/home"
            className="w-full bg-brown-600 text-white py-2 rounded-lg text-center hover:bg-brown-700 transition duration-200 block"
          >
            Sign In
          </Link>

          <div className="text-center mt-4">
            <span className="text-gray-700">Don’t have an account?</span>
            <Link to="/signup" className="text-brown-600 hover:underline ml-1">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
