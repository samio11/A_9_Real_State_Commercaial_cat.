import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import auth from '../FireBasePackages/FireBaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContentPass } from '../AllContextes/AuthContext';

const UpdateProfile = () => {
    const {user} = useContext(ContentPass);
    const handleUpdate = (e) => {
        e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      console.log(name, photo);
      updateProfile(user,{
        displayName:name,
        photoURL:photo,
      })
      .then(res=>{
        console.log(res)
        toast.success('Profile Updated Successfully');
      })
      .catch(err=>{
       console.log(err)
       toast.error('Error updating profile');
      })
    }
    return (
        <div>
            <div className="flex items-center justify-center text-center bg-gray-50 text-gray-800">
                <form onSubmit={handleUpdate} noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-800">
                    <label htmlFor="username" className="self-start text-xs font-semibold">Username</label>
                    <input id="username" type="text" name='name' className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-600 focus:ring-violet-600" />
                    <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">User Picture</label>
                    <input id="password" type="text" name='photo' className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-600 focus:ring-violet-600" />
                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-gray-50">Update Profile</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;