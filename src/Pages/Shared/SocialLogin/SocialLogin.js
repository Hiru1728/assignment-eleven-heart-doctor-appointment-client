import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const navigate= 

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center w-auto'>
                <button onClick={handleGoogleSignIn} className='btn btn-warning'>
                    Google
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;