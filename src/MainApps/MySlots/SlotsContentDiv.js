import React from 'react';
import classes from './SlotsContentDiv.module.css';


import SlotsCode from './AllSlotCodes/Classes';

const SlotsContentDiv=(props)=>{




return (

    <div className={classes.contentDiv}>
       	
      <SlotsCode userData={props.userData}/>
        
    </div>

);

}


export default SlotsContentDiv;
