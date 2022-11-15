import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import EmergencySymptoms from '../EmergencySymptoms/EmergencySymptoms';
import HeartCheck from '../HeartCheck/HeartCheck';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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