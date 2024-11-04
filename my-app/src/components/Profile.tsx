import React, { useState } from 'react';
import Portfolio from './Portfolio';

const Profile: React.FC = () => {
    const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

    return (
        <>
            <Portfolio />
        </>


    );
};

export default Profile;
