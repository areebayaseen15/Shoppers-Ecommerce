import React from "react";
import Image from "next/image"
const SignInCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-100">
        {/* OAuth Sign-In Section */}
        <h2 className="text-xl font-semibold mb-4">Oauth sign in</h2>
        <div className="flex space-x-3 mb-6">
          <button className="flex items-center justify-center w-full px-2 text-sm text-bold border rounded-md bg-white hover:bg-gray-100">
            <Image
              src="/Assets/google.jpg"
              alt="Google"
              width={200}
              height={200}
              className="w-10 h-10 "
            />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center w-full px-2 text-sm text-bold border rounded-md bg-white hover:bg-gray-100">
          <Image
              src="/Assets/git.png"
              alt="Github"
              width={200}
              height={200}
              className="w-10 h-10 "

            />
            Sign in with Github
          </button>
        </div>

        {/* Credential Sign-In Section */}
        <h2 className="text-xl font-semibold mb-4">Credential sign in</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@youremail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="ex#123456$"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;
