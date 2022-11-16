import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn, loading } = useContext(AuthContext);
    // const navigate= 
    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-warning w-auto'>
                    Sign in with Google
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;