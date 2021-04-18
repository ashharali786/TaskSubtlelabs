import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="container col-8">
            <div className="py-4">
                <h1 className="heading">Contact-Us</h1>
                <form>
                <div class="form-group">
                        <label className="font-weight-bold" for="exampleInputName">Name</label>
                        <input type="name" class="form-control" id="exampleInputName" placeholder="Enter your Name" />
                    </div>
                    <div class="form-group">
                        <label className="font-weight-bold" for="exampleInputEmail">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label className="font-weight-bold" for="exampleInputNumber">Mobile No.</label>
                        <input type="mobile" class="form-control" id="exampleInputNumber" placeholder="Enter Mobile Number" />
                    </div>
                    <button type="submit" class="btn btn-outline-dark font-weight-bold">Submit</button>
                    <Link type="submit" to="/" class="btn btn-outline-danger ml-3 font-weight-bold">Cancel</Link>
                </form>
            </div>
        </div>
    );
};

export default Home;