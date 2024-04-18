import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Statechange.css'

const Statechange = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        if(count>0)
        {
            setCount(count - 1);
            
        }
    }

    return (
    <div>
        <div className='move'>    
            <img src="https://media.licdn.com/dms/image/D5622AQHdK9iUwA6mtw/feedshare-shrink_800/0/1709297181089?e=2147483647&v=beta&t=WpGAU5zXA0jzPERTgeFSowrRiFAq8Y0hkMl8LrnjULg"  alt="skills"/>   
            <div class="buttons-container">
            <button className="like-button" onMouseOver={increaseCount} >Like</button>
            <button className="dislike-button" onMouseOver={decreaseCount}>Dislike</button>
            </div> 
        </div>
        <p>{count}</p>
        </div>
    );
};

export default Statechange;
