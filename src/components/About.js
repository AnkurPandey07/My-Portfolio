import React from 'react';

/**************** IMPORTING IMAGE ****************/
import myself from '../img/lg10.jpeg';

function About(){
    return(
       <div className='a' id='about'>
           <div className='a-left'>
               <div className='a-bg'></div>
               <img src={myself} alt='' className='a-img'></img>
           </div>
           <div className='a-right'>
               <h1 className='a-title'>About Me</h1>
               <p className='a-descp'>
                    Currently a Second Year EEE Undergraduate at Birla Institute Of Technology, Mesra.
                 
                    My Interest lies in Music, Sports like Football, Badminton. Also, I
                    like to play ESports such as Valorant.
             
                    I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have
                    something to strive towards. I’m not comfortable with settling, and I’m always looking for an
                    opportunity to do better and achieve greatness.
               
                    Apart from this Am a very good singer(as they say), I was my school Football Team Captain and
                    also
                    have a keen interest for competitive programming.

                    I am also a Coding Enthusiast, Currently exploring and learning web development. I also hold a
                    position as a Web Developer in IETE Bit Mesra.</p>
           </div>
       </div> 
    );
}

export default About;