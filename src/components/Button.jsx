import React, { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0)
    const handleCountClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleCountClick}>Clicked {count} Times</button>

        </div>
    );
};

export default Button;