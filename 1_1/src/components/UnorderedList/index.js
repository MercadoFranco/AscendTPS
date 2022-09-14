import React from 'react';

const UnorderedList = ({ amount = 0 }) => {
    const auxList = Array(amount).fill();
    return (
        <ul>
            {auxList.map((item, index) => (
                <li>
                    {`Item número ${index + 1}`}
                </li>
            ))}
        </ul>
    );
}

export default UnorderedList;