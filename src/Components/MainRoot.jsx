
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const MainRoot = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;