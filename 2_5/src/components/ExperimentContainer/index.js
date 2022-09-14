import React, { useState } from 'react';
import './index.css';

const ExperimentContainer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isInside, setIsInside] = useState(false);

    const handleEnter = () => {
        if (isActive) setIsInside(true);
    }

    const handleLeave = () => {
        if (isActive) setIsInside(false);
    }
    return (
        <div className='ExperimentContainer'>
            <button
                disabled={isActive}
                onClick={() => setIsActive(true)}
            >
                {isActive ? 'Activado' : 'Activar sensor'}
            </button>

            <div className='SensorContainer'>
                <div
                    className='DottedBorder'
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    Soy un div!
                </div>

                <div className='DottedBorder'>
                    {isInside ? 'Inside!' : 'Outside!'}
                </div>
            </div>
        </div>
    );
}

export default ExperimentContainer;