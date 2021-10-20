import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, loginUser, registerNewUser, error, setError, setName } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long');
            return;
        }
        isLogin ? loginUser(email, password) : registerNewUser(email, password);
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div>
                        <form onSubmit={handleRegistration}>
                            <h3 style={{color:"#00887a"}} className="text-center my-3 pb-3">{isLogin ? 'Please Login' : 'Create An Account'}</h3>
                            {!isLogin && <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input required type="text" onBlur={handleNameChange} className="form-control" id="yourname" placeholder="Your Name" />
                                </div>
                            </div>}
                            <div className="row mb-3">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailChange} required type="email" className="form-control" id="inputEmail" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePasswordChange} required type="password" className="form-control" id="inputPassword" placeholder="Your Password" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn text-white" style={{backgroundColor:"#00887a"}}>{isLogin ? 'Login' : 'Register'}</button>

                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="text-center">
                <p className="fs-5 mt-3">Try Google Login</p>
                <button style={{ backgroundColor: "#00887a" }} onClick={signInUsingGoogle} className="btn text-white fs-5 px-3"><i className="fab fa-google"></i></button>
            </div>
        </div>
    );
};

export default Login;