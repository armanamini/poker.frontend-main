import React from 'react'
import style from "./Navbar.module.css"
const Footer = ({viewMode}) => {
  return (
    <div className={viewMode?style.footer:style.footerLight}>
        <h2>Virtue Gaming Operations Limited. Powered by Autoaid.</h2>
    </div>
  )
}

export default Footer