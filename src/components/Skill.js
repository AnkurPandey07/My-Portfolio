import react from 'react';
import Language from './Language';
import {typesoflanguage} from './Langtype';

function Skill() {
    return (
        <div className='s' id='skill'>
        <div className='s-texts'>
            <h1 className='s-title'>Skills</h1>
        </div>
        <div className='s-total'>
           {typesoflanguage.map((item) => ( 
           <Language key={item.id} image={item.img}/> 
           ))}
        </div>
        </div>
    );
};

export default Skill;