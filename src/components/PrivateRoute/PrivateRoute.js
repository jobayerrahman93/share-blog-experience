import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
 
    const {user}=useAuth();
    // console.log(user)
    const location = useLocation();
    // console.log(location);
   
    return user.email ? children : <Navigate to="/login"  state={{from:location}}/>
};

export default PrivateRoute;