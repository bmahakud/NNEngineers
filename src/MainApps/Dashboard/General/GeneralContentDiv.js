import React,{useState,useEffect} from 'react';
import classes from './GeneralContentDiv.module.css';
import base from '../../CommonAppUtilities/AppContentDiv.module.css';
import {Route,Switch, useHistory} from 'react-router-dom';





const GeneralContentDiv=(props)=>{



  const createdocHandler=()=>{


  }




return (

<div className={base.appContentDiv}>

	<div className={classes.contentDiv}>
     

          <button type="button" className={classes.createDocButton} onClick={createdocHandler}> 
	        + Schedule a meeting 
	  </button>
  



   </div>
</div>	

);

}


export default GeneralContentDiv;
