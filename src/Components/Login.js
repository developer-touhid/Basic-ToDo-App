import React, { useState } from 'react';
import NavBar from './NavBar';

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:' + email, 'Password:' + pass);
    }

    return (
        <>
            <NavBar />
            <div className="container">
            <h3 className="text-center m-5">Login Here</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" onChange={(e) => setPass(e.target.value)} />
                        </div>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    );
};

export default Login;