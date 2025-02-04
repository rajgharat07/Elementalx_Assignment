import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-teal-500 to-teal-900">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-96 text-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-400 px-6 py-2 rounded-lg text-center font-bold text-gray-900">
          {isLoginForm ? "SIGN IN" : "SIGN UP"}
        </div>
        <div className="flex justify-center my-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
        </div>
        <div>
          {!isLoginForm && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                className="w-full p-3 mb-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                className="w-full p-3 mb-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <input
            type="text"
            placeholder="Email ID"
            value={emailId}
            className="w-full p-3 mb-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={(e) => setEmailId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full p-3 mb-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-red-500 text-center mb-2">{error}</p>
        <button
          className="w-full bg-teal-400 text-gray-900 font-bold py-3 rounded hover:bg-teal-500"
          onClick={isLoginForm ? handleLogin : handleSignUp}
        >
          {isLoginForm ? "LOGIN" : "SIGN UP"}
        </button>
        <p
          className="text-center mt-4 cursor-pointer hover:underline"
          onClick={() => setIsLoginForm((prev) => !prev)}
        >
          {isLoginForm ? "New User? Sign up here" : "Existing User? Sign in here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
