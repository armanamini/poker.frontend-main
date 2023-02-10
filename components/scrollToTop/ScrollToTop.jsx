import React, { useEffect, useState } from 'react';
import style from "./ScrollToTop.module.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useWindowScroll } from 'react-use';



const ScrollToTop = () => {
    const { y: pageYOffset}=useWindowScroll();
    const [visible,setVisible] = useState(false);
    useEffect(()=>{
        if(pageYOffset > 400){
            setVisible(true)

        }else{
            setVisible(false)

        }

    },[pageYOffset])

    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})

    if(!visible){
        return false
    }
    return (
        <div className={style.ScrollToTop} onClick={scrollTop}>
            <ArrowUpwardIcon className={style.icon}/>
            
        </div>
    );
};

export default ScrollToTop;