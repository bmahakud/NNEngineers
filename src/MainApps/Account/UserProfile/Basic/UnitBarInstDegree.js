import React from 'react';
import classes from './UnitBarInstDegree.module.css';

import { BsTrash } from "react-icons/bs";
import {deleteedudegree} from '../../../../CommonApps/AllAPICalls';


const UnitBarInstDegree = (props)=>{



const deleteEduDegreeHandler=()=>{


 let edudegreeid=props.id;

 deleteedudegree({edudegreeid});

}

return (

<div className={classes.unitBarInstDegree}>



   <div className={classes.InstInfo}> 

      <div className={classes.InstInfo__degree}>
	{props.degree}
      </div>

      <div className={classes.InstInfo__instName}>
	{props.institute}
      </div>

      <div className={classes.InstInfo__duration}>
	{props.duration}
      </div>


      <div className={classes.InstInfo__location}>
	<span> Marks: </span>
	{props.marks}
      </div>

   </div>

   <button type="button" className={classes.deleteButton} onClick={deleteEduDegreeHandler}> <BsTrash/> </button>

</div>
);


}
export default UnitBarInstDegree;
