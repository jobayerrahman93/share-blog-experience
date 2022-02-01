import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImage from '../Login/images/login.png';


const Login = () => {

    const [loginData, setLoginData] = useState('');
    const {loginUser,googleSignIn,setUser}=useAuth();
    const location=useLocation();
    // console.log(location);

    const redirect_uri= location.state?.from ||'/';

    useEffect(()=>{
        document.title="Login"
    },[])


  
   
    // const location = useLocation();
    // // console.log('login',location);
    const navigate = useNavigate();


    const handleOnsubmit = (e) => {

        loginUser(loginData.email,loginData.password,location)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
    
            console.log(location, "from loginuser");
            
            navigate(redirect_uri);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        
    
        e.preventDefault();
    }


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData= {...loginData};

        newLoginData[field]=value;

        setLoginData(newLoginData);


    }


    const signIngoogle=()=>{

        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log("usergoogle", user);
    
            setUser(user);
            console.log(location, "google");


            navigate(redirect_uri);
    
        
          })
          .catch((error) => {
            const errorMessage = error.message;
          });

    }


    return (
        <div>
            <div className="login-page ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleOnsubmit} className="mt-5 pt-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    name="email"
                                    onBlur={handleOnChange}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    name="password"
                                    onBlur={handleOnChange}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1" />

                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <button onClick={()=>signIngoogle()}  type="submit" className="btn btn-warning ms-3">Sign in with google</button>

                            <Link to="/register">
                                <p  className="my-3">New user ? Please register</p>
                            </Link>


                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <img className="img-fluid mt-4 ms-5" width={500} src={loginImage} alt="" />
                    </div>
                </div>


            </div>
        </div>
        </div>
    );
};

export default Login;