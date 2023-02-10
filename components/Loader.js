import React from 'react';

const Loader = () => {
    return (
        <div style={{width:"100%",height:"100vw",backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
            <img style={{marginTop:"10%"}} src='/images/loader.gif'/>
            
        </div>
    );
};

export default Loader;