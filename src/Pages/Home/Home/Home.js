import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Departments from '../Departments/Departments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;