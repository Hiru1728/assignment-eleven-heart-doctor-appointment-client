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
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-warning w-auto'>
                    Google
                </button>
            </p>
        </div>
    );
};

export default SocialLogin;