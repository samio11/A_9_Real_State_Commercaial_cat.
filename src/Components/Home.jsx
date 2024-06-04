import React, { useContext } from 'react';
import { ContentPass } from '../AllContextes/AuthContext';

const Home = () => {
    const s1 = useContext(ContentPass);
    console.log(s1);
    return (
        <div>
            <h2>Hello this is home</h2>
        </div>
    );
};

export default Home;