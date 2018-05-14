import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = () => {
    return (
        <div>
            <img src={burgerLogo} alt="om-nom-nom" className="Logo"/>
        </div>
    );
};

export default logo;
