
import {useState, useEffect} from 'react';

import classes from "./EATechData.module.css";


import {geteatechdata} from "./../CommonApps/AllAPICalls";


function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}, ${month}/${day}`;
}



const EATechData=()=>{




  const [eaTechData, getEATechData] = useState(null);


  useEffect(()=>{

 
    geteatechdata({getEATechData});	  



  },[]);

	

  console.log("eaTechData: ", eaTechData);





return <div className={classes.plcDataDiv}>


   <div className={classes.plcTitleDiv}> Live Data from  DMA , Pipli </div>



   <div style={{height:"50px"}}> </div>


         <div className={classes.oneRow}>
		<div className={classes.leftDiv}> Time </div>
                <div className={classes.leftDiv}> UGR LEVEL </div>
                <div className={classes.middleDiv}> ESR LEVEL </div>
                <div className={classes.rightDiv}> FLOW RATE: Line01 </div>
		<div className={classes.rightDiv}> PRESSURE: Line01 </div>

                <div className={classes.rightDiv}> FLOW RATE: Line02 </div>
                <div className={classes.rightDiv}> PRESSURE: Line02 </div>

		<div className={classes.rightDiv}> FLOW RATE: Line03 </div>
                <div className={classes.rightDiv}> PRESSURE: Line03 </div>

         </div>





  { eaTechData !==null && eaTechData.map((oneData, index)=>{


      return <div className={classes.oneRow1} key={index}>

		<div className={classes.leftDiv}> {formatTimestamp(oneData.time)}</div>  
                <div className={classes.leftDiv}> {oneData.ugrlevel} </div>
                <div className={classes.middleDiv}> {oneData.esrlevel} </div>
		<div className={classes.middleDiv}> {oneData.flowrateline01} </div>
		<div className={classes.middleDiv}> {oneData.pressureline01} </div>
                <div className={classes.middleDiv}> {oneData.flowrateline02} </div>
                <div className={classes.middleDiv}> {oneData.pressureline02} </div>
		<div className={classes.middleDiv}> {oneData.flowrateline03} </div>
                <div className={classes.middleDiv}> {oneData.pressureline03} </div>



   </div>
 



     })



   }

</div>

}


export default EATechData;
