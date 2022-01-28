import React from 'react';
import { Navigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
 
    const {user}=useAuth();
    console.log(user)
    // const location = useLocation();
    // console.log(location);
   
    return user.email ? children : <Navigate to="/login" />
};

export default PrivateRoute;