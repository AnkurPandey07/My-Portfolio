import React from 'react';

/**************** IMPORTING ARRAY OBJECT FROM LANGTYPE.JS ****************/
import {typesoflanguage} from './Langtype';

function Language({image}){
    return(
        <div className='lang'> 
            <a href='#' target="_blank" rel='noreferrer'>
                <img src={image} alt='' className='lang-img'></img>
            </a>
        </div>
    );
}

export default Language;