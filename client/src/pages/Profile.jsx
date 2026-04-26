import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../redux/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px] text-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        {user ? (
          <>
            <div className="mb-4">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>

            <button
              onClick={() => dispatch(logoutUser())}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">No user logged in</p>
        )}
      </div>
    </div>
  );
};

export default Profile;