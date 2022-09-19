import React, { useState } from 'react';
import LoadingCircle from '../LoadingCircle';
import './index.css';

const ContentDisplayer = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 5000);

    return (
        <div>
            {
                loading ? (
                    <div className='Container'>
                        Cargando...
                        <LoadingCircle />
                    </div>
                ) : (
                    <p>
                        Bienvenido al contenido
                    </p>
                )
            }
        </div>
    );
}

export default ContentDisplayer;