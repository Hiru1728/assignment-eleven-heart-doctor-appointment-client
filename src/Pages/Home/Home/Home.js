import React from 'react';
import Banner from '../Banner/Banner';
import EmergencySymptoms from '../EmergencySymptoms/EmergencySymptoms';
import HeartCheck from '../HeartCheck/HeartCheck';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HeartCheck></HeartCheck>
            <EmergencySymptoms></EmergencySymptoms>
        </div>
    );
};

export default Home;