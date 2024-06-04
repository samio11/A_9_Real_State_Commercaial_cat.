import Lottie from 'lottie-react';
import reg from './regis.json'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { ContentPass } from '../AllContextes/AuthContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(ContentPass)
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);
        if (!name) {
            toast('Please enter a name')
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            toast.error('Please enter a valid email address')
            return;
        }
        if (!photo) {
            toast.error('Please enter a photo url')
            return;

        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            toast.error('Please enter a valid password')
            return;
        }

        createUser(email, password)
        .then(res=>{
            updateProfile(res.user,{
                displayName:name,
                photoURL:photo
            })
            .then(res=>{
                toast.success('User created successfully')
                e.target.reset()
            })
            .catch(err=>{
                toast.error(err.message)
            })
        })
        .catch(err=>{
            toast.error(err.message)
        })
       
    }
    return (
        <div>
            <div className="hero h-auto lg:h-[80vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie className='h-[300px] lg:h-[600px]' animationData={reg}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter Photo URL IMGBB" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className='text-xs'>Already Have an account <Link to={'/login'} className='label-text-alt link link-hover'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;