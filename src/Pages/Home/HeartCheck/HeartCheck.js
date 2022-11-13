import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/austin+kosier+heart+anatomy+cardiac+structures-removebg-preview.png'

const HeartCheck = () => {
    return (
        <div className="card p-3 mt-10 lg:card-side bg-base-100 shadow-xl">

            <figure className='w-full'><img src={img} alt="Album" /></figure>

            <div className="card-body">
                <h2 className="card-title">How to take care of your heart health !!!</h2>
                <p>Cardiovascular diseases (CVDs) are the world’s leading killer, causing 1 in every 3 deaths. In the Philippines, cardiovascular diseases are also the number one cause of death, with an estimated 50,000 dying every year. The cause of heart attacks and strokes are usually the presence of a combination of risk factors, such as tobacco use, unhealthy diet and obesity, physical inactivity and use of alcohol, hypertension, diabetes and high level of cholesterol.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning">
                        <Link to='/heartcheckdetails'>See details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeartCheck;