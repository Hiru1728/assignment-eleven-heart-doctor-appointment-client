import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/lasteSectionImage-removebg-preview.png'

const EmergencySymptoms = () => {
    return (
        <div className="card p-3 mt-10 lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">When to see a doctor !!!</h2>
                <p>
                    Seek emergency medical care if you have these heart disease symptoms:
                    <br />
                    <br />
                    Chest pain <br />
                    Shortness of breath <br />
                    Fainting <br />
                    <br />
                    Always call 911 or emergency medical help if you think you might be having a heart attack.
                    <br />
                    Heart disease is easier to treat when detected early. Talk to your health care provider if you have any concerns about your heart health. Together, you and your provider can discuss ways to reduce your heart disease risk. This is especially important if you have a family history of heart disease.

                    If you think you may symptoms of heart disease, make an <span>Log in</span> to see your button.</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline btn-warning">
                        <Link to='/login'>Log In</Link>
                    </button>
                </div>
            </div>
            <figure className='w-full'><img src={img} alt="Album" /></figure>

        </div>
    );
};

export default EmergencySymptoms;