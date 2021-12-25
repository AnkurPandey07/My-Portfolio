import React from 'react';

/**************** IMPORTING IMAGE ****************/
import Images from '../img/Project.png';
import Img from '../img/Proj.png';


function Project() {
    return (
        <div className='proj' id='project'>
            <div className='proj-texts'>
                <h1 className='proj-title'>Projects</h1>
            </div>
            <div className='proj-wrapper'>
            <div className='proj-left'>
                <div class="card">
                    <img class="card-img-top" src={Images} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Project-I</h5>
                        <p class="card-text">A very basic Portfolio Website which I made for LEAD_21
                            Project. In this I had used HTML, CSS & a little of JavaScript. Also, I had used some
                            Animations as well and made it a little fascinating.</p>
                        <a href="https://github.com/AnkurPandey07/IEEE_LEAD" target="_blank" class="btn btn-dark">Visit Repo</a>
                    </div>
                </div>
            </div>
            <div className='proj-left'>
                <div class="card">
                    <img class="card-img-top" src={Img} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Project-II</h5>
                        <p class="card-text">Hint : IEEE Mega project🤫</p>
                        <a href="#" target="_blank" class="btn btn-dark">Visit Repo</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Project;