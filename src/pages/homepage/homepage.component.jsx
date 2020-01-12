import React from 'react';
import './homepage.styles.scss';


import CloudFringes from '../../assets/images/Cloud Fringes.svg';
import leftQuote from '../../assets/icons/left-quote-2x.png';
import rightQuote from '../../assets/icons/right-quote-2x.png';

const HomePage = () => (
    <div className = 'homepage'>
        <div className = 'row-1'>
            <div className = 'main-image'>
                <img src = '' />
            </div>
            <div className = 'site-description'>
                <h1>Fresh Cakes with no preservatives</h1>
                <h2>Sub Heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div className = 'row-2'>
        
            <div className = 'content'>
            <h2>Recommended</h2>
            <div className = 'recommended-list'>
                <div className = 'list-item'>
                    <div className = 'list-item-image'>
                        <img src = '' />
                    </div>
                    <span>Cake</span>
                </div>
                <div className = 'list-item'>
                    <div className = 'list-item-image'>
                        <img src = '' />
                    </div>
                    <span>Cake</span>
                </div>
                <div className = 'list-item'>
                    <div className = 'list-item-image'>
                        <img src = '' />
                    </div>
                    <span>Cake</span>
                </div>
            </div>
            </div>
        </div>

        <div className = 'row-3'>
            <h2>Why EYHO?</h2>
            <div className = 'why-eyho-image'>
                <img src = '' />
            </div>
        </div>

        <div className = 'testimonials'>
            <h2>Testimonials</h2>
            <div className = 'testimonial-item'>
                <div className = 'testimonial-text'>
                    <img src = {leftQuote}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <img src = {rightQuote}/>
                </div>
                <div className = 'testimonial-image'>
                    <img src = '' />
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;