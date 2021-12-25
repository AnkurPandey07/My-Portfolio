import React from 'react';
import Typed from 'react-typed';

/**************** IMPORTING IMAGE ****************/
import Home from '../img/home.png';

/**************** REACT ICONS ****************/
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Header() {
    return (
        <div className='i' id='home'>
            <div className='i-left'>
                <div className='i-left wrapper'>
                    <h3 className='i-intro'>Hello, I'm</h3>
                    <h1 className='i-names'>ANKUR PANDEY</h1>
                    <div className='i-title'>
                        <div className='i-title-item'>
                            <Typed
                                className='typed-text'
                                strings={["Coder", "Learner", "Techie", "Web Developer"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />
                        </div>
                    </div>
                </div>
                <div className='i-social'>
                    <ul class="i-social-links list-unstyled d-flex">
                        <li><a class="link-light" href="https://www.facebook.com/profile.php?id=100011909628206" target="_blank"><FaFacebook size='1.5rem' className='bi' /></a></li>
                        <li><a class="link-light" href="https://www.instagram.com/__ankur1902_/" target="_blank"><FaInstagram size='1.5rem' /></a></li>
                        <li><a class="link-light" href="https://wa.me/916206841016" target="_blank"><FaWhatsapp size='1.5rem' /></a></li>
                        <li><a class="link-light" href="#" target="_blank"><FaEnvelope size='1.5rem' /></a></li>
                        <li><a class="link-light" href="https://github.com/AnkurPandey07" target="_blank"><FaGithub size='1.5rem' /></a></li>
                    </ul>
                </div>
            </div>
            <div className='i-right'>
                <img src={Home} alt='' className='i-img'></img>
            </div>
        </div>

    );
}

export default Header;