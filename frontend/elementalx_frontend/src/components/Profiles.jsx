import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../utils/profileSlice";
import Navbar from "./Navbar";

const Profiles = () => {
    const profile = useSelector((store) => store.profile);
    const dispatch = useDispatch();
    const getUsers = async () => {

        try {
            const res = await axios.get(BASE_URL + "/users",{withCredentials: true});
            console.log(res.data);
            dispatch(userProfile(res?.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    },[])
  return (
    <>
    <div>
        <Navbar/>
      <h1 className="text-3xl font-bold text-center">User Profiles</h1>
      { profile &&  <div className="overflow-x-auto bg-white rounded-lg shadow-md mt-5 p-4">
        <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-100 border-b">
            <tr>
                <th className="text-left p-3 text-sm font-medium text-gray-700">#</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">
                FirstName
                </th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">
                LastName
                </th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Role</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">
                Status
                </th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">
                Action
                </th>
            </tr>
            </thead>
            <tbody>
            {profile.map((user, index) => (
                <tr
                key={user._id}
                className={`border-b hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                }`}
                >
                <td className="p-3 text-sm text-gray-700">{index + 1}</td>
                <td className="p-3 flex items-center text-sm text-gray-700">
                    {user.firstName}
                </td>
                <td className="p-3 text-sm text-gray-700">{user.lastName}</td>
                <td className="p-3 text-sm text-gray-700">{user.role}</td>
                <td
                    className={`p-3 text-sm font-medium text-green-500 `}
                >
                    Active
                </td>
                <td className="p-3 text-sm text-gray-700 flex gap-2">
                    <button
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    title="Edit"
                    >
                    ⚙️
                    </button>
                    <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    title="Delete"
                    >
                    ❌
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>}
    </div>
    </>
  )
}

export default Profiles
