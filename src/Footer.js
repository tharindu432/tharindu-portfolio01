import React from 'react'
import  {BsInstagram} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsStackOverflow } from 'react-icons/bs'
import './Footer.css';
import {BiCopyright} from 'react-icons/bi'


const Footer = () => {
  return (
    <div>
      <footer style={{margin:5}}>
        <h2>RoboFriends App</h2>
        <section >
        <a href='https://www.linkedin.com/in/tharindu-chathuranga-ruwanpathirana-5917a520a/' > <BsLinkedin color='black' /> </a>
        <a href='https://github.com/tharindu432' ><BsGithub color='black'/> </a>
        <a href="https://stackoverflow.com/users/20852452/chathuranga-ruwanpathirana"> <BsStackOverflow color='black'/> </a>
        <a  href='https://www.instagram.com/chathurangaruwanpathirana/' > <BsInstagram color='black'/> </a>


        </section>
        <h5><BiCopyright />Chathuranga Ruwanpathirana.All rights reserved</h5>
      </footer>
    </div>
  )
}

export default Footer;
