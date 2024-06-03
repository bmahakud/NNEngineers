import classes from './FormInputObjects.module.css';
import React,{useState} from 'react';
import Switch from "react-switch";

import {BsCheckLg} from 'react-icons/bs';


export const TextInput = (props)=>{

return <div className={classes.name_div} style={{width:props.width}}>
          <div className={classes.name_txt}>
		{props.requirement==="*" && <span style={{color:"red"}}> * </span>}
		{props.label}
	  </div>
	  <div className={classes.name_inputDiv} >	
            <input
              type="text"
              onChange={props.handleChange}
              name={props.name}
              className={classes.input_field}
              placeholder={props.placeholder}
              defaultValue={props.defaultValue}
            />
          </div>		
    </div>

}





export const TextInputAddSpeaker = (props) =>{


  console.log("addedUser: ", props.addedUser, Object.keys(props.addedUser).length);

return <div className={classes.name_div} style={{width:"80%",marginBottom:"15px"}}>
          <div className={classes.name_txt}>{props.label}</div>
          <div className={classes.name_inputDiv} >
            <input
                 type="text"
                 onChange={props.handleChange}
                 name={props.name}
                 className={classes.input_field}
                 placeholder={props.placeholder}
                 defaultValue={props.defaultValue}
                 />

         </div>

           <div className={classes.selectedSpeaker}>
               { Number(Object.keys(props.addedUser).length) !== Number(0) &&
                <i> Speaker: {props.addedUser.firstname}{props.addedUser.lastname} <BsCheckLg style={{color:"green"}}/></i>
               }
           </div>

         <div className={classes.name_txt_search}> 
		{                 
                   props.searchUsers.map((user,index)=>{
                      return <button type='button' key={index}  className={classes.searchResultButton}  onClick={()=>props.selectedSpeaker({user})}>
                                  <i>{"+ Add : "}</i> <i>{user.firstname} {user.lastname}</i>  <i>{"+ Add"}</i>
                             </button>
                     })
                }
         </div>
    </div>

}








export const SearchAndInsert = (props)=>{


    const [showDropDown, setShowDropDown] = useState(false); 

    const selectInstituteHandler=(instituteId,instName)=>{

      console.log("instituteId: lll", instituteId);
      //props.handleChange();
      props.updateFormData({...props.formData,['institute']:instName, ['instituteid']:instituteId});
      setShowDropDown(false);
      setValue(value=>instName);

    }

    const [value, setValue] = useState("");
   
    const onChangeHandler=(e)=>{
   
     setValue(value=>e.target.value);
     props.setSearchInstString(searchInstString=>e.target.value);
     props.updateFormData({...props.formData,['institute']: e.target.value, ['instituteid']:"" });
    }


   console.log("value: ", value)

   //{props.formData['institute']}

return  <div className={classes.name_div}>

	<div className={classes.name_txt}>
                {props.requirement==="*" && <span style={{color:"red"}}> * </span>}
                {props.label}
          </div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={onChangeHandler}
              name={props.name}
              className={classes.input_field_searchnInsert}
              placeholder={props.placeholder}
	      onFocus={()=>setShowDropDown(true)}
	      value={value}
	      autoComplete="off"
            />
          </div>
	

         { showDropDown &&  
         <div className={classes.searchDropDown} >

	    {  props.searchedObjects !=null && props.searchedObjects.results !=null && props.searchedObjects.results.map((oneResult, index)=>{

           
		    let instituteId= oneResult.id;
		    let instName=oneResult.name;
                   return <button key={index} 
		                  type="button" 
		                  className={classes.oneSearchOptionButton} 
		                  onClick={()=>selectInstituteHandler(instituteId,instName)} 
			          > 
			          {oneResult.name}   
			  </button>


	        })

            }


         </div>

         }		 

        </div>

}





export const OptionField = (props)=>{



  return <div className={classes.name_div} style={{width:props.width}}>
        
		
        <div className={classes.name_txt}> 
		{props.requirement==="*" && <span style={{color:"red"}}> * </span>}
		{props.label}
	</div>
         
        <div className={classes.name_inputDiv} >
        <select name={props.name}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
          <option value="categoryDefault" disabled > 
		{props.defaultValue} 
	 </option>
          
          { props.options.map((option,index)=>{

                  return <option key={index} value={option.id} style={{color:"grey"}} >  {option.name}  </option>
 
                }
          )}

        </select>
      </div>		
  </div>


}






export const OptionFieldCourses = (props)=>{

  console.log("optional courses: ", props.options);

  return <div className={classes.name_div}>

            <div className={classes.name_txt}>
                {props.requirement==="*" && <span style={{color:"red"}}> * </span>}
                {props.label}
            </div>

            <div className={classes.name_inputDiv} >
            <select name={props.name}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
                <option value="categoryDefault" disabled >
                      {props.defaultValue}
                </option>


               { props.options.map((option,index)=>{

                   return <option key={index} value = {option.id+"*"+option.syllabus} > { option.courseShortName }  </option>

                   }
               )}
 
           </select>
      </div>
  </div>


}





export const OptionFieldSubmitValue = (props)=>{


return <div className={classes.name_div}>

        <div className={classes.name_txt}>
		{props.requirement==="*" && <span style={{color:"red"}}> * </span>}
		{props.label}
		</div>
        <div className={classes.name_inputDiv} >

        <select name={props.name}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
          <option value="categoryDefault" disabled> --- </option>


          { props.options.map((option,index)=>{

                return <option key={index} value={option.name}> {option.name}  </option>

                }

          )}

        </select>
    </div>
 </div>


}

























export const OptionFieldSecondaryObjs = (props)=>{



return <div className={classes.name_div}>

        <div className={classes.name_txt}>
		{props.requirement==="*" && <span style={{color:"red"}}> * </span>}
		{props.label}
	</div>
        <div className={classes.name_inputDiv} >

        <select name={props.name}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
          <option value="categoryDefault" disabled> --- </option>


          { props.options.map((option,index)=>{

                return <option key={index} value={option.id}> {option}  </option>

                }

          )}

        </select>
    </div>
 </div>


}







export const ParagraphField = (props)=>{

return <div className={classes.name_div} style={{width:props.width}}>
          <div className={classes.name_txt}>{props.label}</div>
          <div className={classes.name_inputDiv_Paragraph} >
            <textarea
              type="text"
              onChange={props.handleChange}
              name={props.name}
              className={classes.input_field_paragraph}
              placeholder={props.placeholder}
              defaultValue={props.defaultValue}
            />
         </div>
    </div>

}






export const DateField = (props) =>{

return( 
       <div className={classes.name_div} style={{width:props.width}}>
           <div className={classes.name_txt}>
	      {props.requirement==="*" && <span style={{color:"red"}}> * </span>}
	      {props.label}
	   </div>
	   <div className={classes.name_inputDiv} >
              <input
                  type="date"
                  onChange={props.handleChange}
                  name={props.name}
	          className={classes.input_field}
                  placeholder={props.placeholder}
                  style={{color: 'grey'}}
	          defaultValue={props.defaultValue}
                  />
           </div>
       </div>

);


}





export const DayField = (props)=>{

   const [checked,setChecked]=useState(false);

   const handleChange=()=>{
     setChecked(!checked);
     props.setChecked(!checked);	  
   }	

   let hrOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12"]
   let minOptions = ["00","10","15","20","25","30","35","40","45","50","55","59"]
   let ampmOptions = ["am","pm"]
   let classduration = ["00","10","15","20","25","30","35","40","45","50","55","59"]	

return <div className={classes.name_div}>

        <div className={classes.name_txt}>
		{props.label}
	</div>
        <div className={classes.name_inputDiv} >
        <select name={props.selectedhour}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
            <option value="categoryDefault" disabled >Hour</option>
            { hrOptions.map((option,index)=>{
                return <option key={index} value={option} disabled={!checked}> {option}  </option>
		      
                }

            )}

        </select>

       <select name={props.selectedminute}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
          <option value="categoryDefault" disabled > Minute</option>

          { minOptions.map((option,index)=>{

                return <option key={index} value={option} disabled={!checked}>{option}  </option>

                }

          )}

       </select>

       <select name={props.selectedampm}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
               <option value="categoryDefault" disabled>am or pm</option>
              { ampmOptions.map((option,index)=>{

                       return <option key={index} value={option} disabled={!checked}> {option}  </option>

                 }

             )}

       </select>


       {
       <select name={props.selectedduration}  onChange={props.handleChange} type="text" className={classes.input_field} defaultValue={"categoryDefault"}>
               <option value="categoryDefault" disabled>class duration</option>


              { classduration.map((option,index)=>{

                       return <option key={index} value={option} disabled={!checked}> {option}{" minutes"}  </option>

                 }

              )}

       </select>
       }


       <div className={classes.toggleSwitch}>
		{<Switch onChange={handleChange} checked={checked} />}
       </div>

    </div>
 </div>


}




export const TimeField = (props) =>{


   let hrOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12"]
   let minOptions = ["00","10","15","20","25","30","35","40","45","50","55","59"]	
   let ampmOptions = ["am","pm"]	


return(
        <div className={classes.name_div} style={{width:props.width}}>
        <div className={classes.name_txt}>
	   {props.requirement==="*" && <span style={{color:"red"}}> * </span>} 
	   {props.label}
	</div>
        <div className={classes.name_inputDivTimeField}>
       
        <select name={props.selectedhour}  onChange={props.handleChange} type="text" className={classes.input_field_time} defaultValue={"categoryDefault"}>
               <option value="categoryDefault" disabled>Hr : </option>

              { hrOptions.map((option,index)=>{

                       return <option key={index} value={option} className={classes.dropdownOptions}> {option+" : "}  </option>

                 }
             )}

            <option value="categoryDefault" disabled>Hr : </option>

        </select>


         <select name={props.selectedminute}  onChange={props.handleChange} type="text" className={classes.input_field_time} defaultValue={"categoryDefault"}>
               <option value="categoryDefault" disabled>Min</option>


              { minOptions.map((option,index)=>{

                       return <option key={index} value={option}> {option}  </option>

                 }

             )}

        </select>


        <select name={props.selectedampm}  onChange={props.handleChange} type="text" className={classes.input_field_time} defaultValue={"categoryDefault"}>
               <option value="categoryDefault" disabled>am/pm</option>

              { ampmOptions.map((option,index)=>{

                       return <option key={index} value={option}> {option}  </option>

                 }

             )}

        </select>

	</div>


     </div>

);


}






export const CustomTimePicker =(props)=>{





    let intervals=[10,15,20,25,30,40,45,50,60,70,120]

    let intervalMins = [{"id": 5,"name": "5 min"},
                       {"id": 10,"name": "10 min"},
                       {"id": 15,"name": "15 min"},
                       {"id": 20,"name": "20 min"},
                       {"id": 25,"name": "25 min"},
                       {"id": 30,"name": "30 min"},
                      ];

    let intervalZones = [{"id": 5,"name": "Indian Standard Time (IST)"},
                       {"id": 10,"name": "Central European Time (CET)"},
                       {"id": 15,"name": "Central Standard Time (CST)"},
                      ];


    let intervalHrs = [{"value": 1,"name": "01"},
                       {"value": 2,"name": "02"},
                       {"value": 3,"name": "03"},
                       {"value": 4,"name": "04"},
                       {"value": 5,"name": "05"},
                       {"value": 6,"name": "06"},
                       {"value": 7,"name": "07"},
                       {"value": 8,"name": "08"},
                       {"value": 9,"name": "09"},
                       {"value": 10,"name": "10"},
                       {"value": 11,"name": "11"},
                       {"value": 12,"name": "12"},
                      ];



    const selectHourHandler=(hour)=>{


         console.log("hour: ",hour);
         props.setTime({
                        ...props.time,
                        ["hour"]:hour ,
                });

    }




   const selectAMPMHandler =(ampm)=>{


     console.log("ampm:  ", ampm);

     props.setTime({
                        ...props.time,
                        ["ampm"]:ampm ,
                });



   }


   let minuteOptions = [{"value": 1,"name": "01"},
                       {"value": 2,"name": "02"},
                       {"value": 3,"name": "03"},
                       {"value": 4,"name": "04"},
                       {"value": 5,"name": "05"},
                       {"value": 6,"name": "06"},
                       {"value": 7,"name": "07"},
                       {"value": 8,"name": "08"},
                       {"value": 9,"name": "09"},
                       {"value": 10,"name": "10"},
                       {"value": 11,"name": "11"},
                       {"value": 12,"name": "12"},
                       {"value": 13,"name": "13"},
                       {"value": 14,"name": "14"},
                       {"value": 15,"name": "15"},
                       {"value": 16,"name": "16"},
                       {"value": 17,"name": "17"},
                       {"value": 18,"name": "18"},
                       {"value": 19,"name": "19"},
                       {"value": 20,"name": "20"},
                       {"value": 21,"name": "21"},
                       {"value": 22,"name": "22"},
                       {"value": 23,"name": "23"},
                       {"value": 24,"name": "24"},
                       {"value": 25,"name": "25"},
                       {"value": 26,"name": "26"},
                       {"value": 27,"name": "27"},
                       {"value": 28,"name": "28"},
                       {"value": 29,"name": "29"},
                       {"value": 30,"name": "30"},
                       {"value": 31,"name": "31"},
                       {"value": 32,"name": "32"},
                       {"value": 33,"name": "33"},
                       {"value": 34,"name": "34"},
                       {"value": 35,"name": "35"},
                       {"value": 36,"name": "36"},
                       {"value": 37,"name": "37"},
                       {"value": 38,"name": "38"},
                       {"value": 39,"name": "39"},
	               {"value": 40,"name": "40"},
                       {"value": 41,"name": "41"},
                       {"value": 42,"name": "42"},
                       {"value": 43,"name": "43"},
                       {"value": 44,"name": "44"},
                       {"value": 45,"name": "45"},
                       {"value": 46,"name": "46"},
                       {"value": 47,"name": "47"},
                       {"value": 48,"name": "48"},
                       {"value": 49,"name": "49"},
                       {"value": 50,"name": "50"},
                       {"value": 51,"name": "51"},
                      ];



        const selectMinuteHandler=(minutes)=>{
           props.setTime({
                        ...props.time,
                        ["minute"]: minutes ,
                });



        }







   return   <div className={classes.name_div} style={{width:props.width}}>


               <div className={classes.name_txt}>
                      {props.requirement==="*" && <span style={{color:"red"}}> * </span>}
                      Time
               </div>


               <div className={classes.name_inputDiv} >
                
                <div className={classes.customTimePicker}>
                  
                  <div> {props.time["hour"]} : {props.time["minute"]} {props.time["ampm"]}</div>

                  <div className={classes.timeDropDownOptions}>

                       <div className={classes.hourDiv}>
                              <button type="button" className={classes.oneTimeDropDownBox1} disabled={true} > hour </button>
                              { intervalHrs.map((obj, index)=>{

                                  let hour=obj.name;
                                  return <button type="button" key={index}className={classes.oneTimeDropDownBox}
                                                       onClick={()=>selectHourHandler(hour)}
                                                       style={{backgroundColor: hour === props.time["hour"]? "lightgrey":"white"}}
                                                       > {obj.name}
                                         </button>
                                             }
                                           )
                              }
                       </div>

                       <div className={classes.minDiv}>

                             <button type="button" className={classes.oneTimeDropDownBox1} disabled={true} > min </button>
                             { minuteOptions.map((obj, index)=>{
                                   let minutes=obj.name;
                                   let minVal = Number(obj.value);
                                   return <button type="button" key={index} className={classes.oneTimeDropDownBox}
                                                       onClick={()=>selectMinuteHandler(minutes)}
                                                       style={{backgroundColor: minVal === Number(props.time["minute"])? "lightgrey":"white"}}
                                                       >
                                                {obj.value}
                                          </button>
                                       } 
                                     )
                             }

                       </div>
                       <div className={classes.ampmDiv}>
                                <button type="button" className={classes.oneTimeDropDownBox1} disabled={true} > meridian </button>
                                <button type="button" className={classes.oneTimeDropDownBox}
                                            onClick={()=>selectAMPMHandler("AM")}
                                            style={{backgroundColor: props.time["ampm"] === "AM" ? "lightgrey":"white"}}
                                            >
                                             am
                                 </button>
                                 <button type="button" className={classes.oneTimeDropDownBox}
                                            onClick={()=>selectAMPMHandler("PM")}
                                            style={{backgroundColor: props.time["ampm"] === "PM" ? "lightgrey":"white"}}
                                            >
                                            pm
                                 </button>
                       </div>

                  </div>

                 
		</div>
		
               </div>
		

           </div>

}




export const FileUpload = (props)=>{

  return <div className={classes.file_div}>
            <div className={classes.file_txt}>
              {props.requirement==="*" && <span style={{color:"red"}}> * </span>}
              {props.label}
         </div>
         <div className={classes.name_inputDiv} >
              <input
                type="file"
                onChange={props.handleChange}
                questionFiles={props.questionFiles}
                className={classes.file_upload}
              />
            </div>
        </div>

  }








