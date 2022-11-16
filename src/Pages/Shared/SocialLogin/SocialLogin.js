import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const navigate= 

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