import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import img from '../../assets/signup/sign-up-concep.webp'
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {
    const { createUser, loading } = useContext(AuthContext);
    useTitle('Sign Up');

    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
    }
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.email.value;
        const password = form.password.value;
        createUser(name, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setAuthToken(user);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;