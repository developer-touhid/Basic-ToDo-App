import React, { useState } from 'react';
import NavBar from './NavBar';

const SignUp = () => {

    const [signupValues, setSignupValues] = useState({
        email : '',
        pass : '',
        address : '',
        phone : '',
    })

    return (
        <>
            <NavBar />
            <div className="container">
                <h3 className="text-center m-5">SignUp Here</h3>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="inputCity" />
                    </div>
                    {/* <div class="col-md-4">
                        <label for="inputState" class="form-label">Occupation</label>
                        <select id="inputState" class="form-select">
                            <option selected>Student</option>
                            <option>Businessman</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Favourite Colour</label>
                        <input type="color" class="form-control form-control-color" value="#563d7c" id="inputZip" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                I agree with terms and conditions
                            </label>
                        </div>
                    </div> */}
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;