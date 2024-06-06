import React, { useContext } from 'react';
import { ContentPass } from '../AllContextes/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(ContentPass);
    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;