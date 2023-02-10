import React from 'react';
import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
    return (
        <div className='not-found-main'>
            <h1 className='not-found-heading'>The page you were looking for was  <span className='not-found-span'>not found</span></h1>
            <div className='not-fount-img-container'>
                <img className='not-fount-img' src="/images/404.png"/>
            </div>

           <div className='not-found-a'>
           <HomeIcon className='home-icon'/>
           <Link  href="/">
            <a>Go to Home page ?</a>
            </Link>
           
           </div>
           </div>
            
            
      
    );
};

export default NotFound;