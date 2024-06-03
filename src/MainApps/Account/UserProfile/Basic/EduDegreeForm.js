import React,{useState, useEffect} from "react";
import classes from "./EduDegreeForm.module.css";

import {createedudegree} from "../../../../CommonApps/AllAPICalls";
import {AiFillCloseCircle} from 'react-icons/ai';



const CreateCourseForm=(props)=>{



 const [ addDegreeStatus, setAddDegreeStatus] = useState("notAdded"); 

const initialFormData = Object.freeze({
        
        institute: "",
        degreename: "",
        startYear: "",
        endYear: "",
	marks:""

        });



const [formData, updateFormData] = useState(initialFormData);

const handleChange1 = (e) => {

        updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim()
                });
        };







const handleSubmit = (e) => {
	  e.preventDefault();
	  //setShowForm(false);
	   
          if(formData.degreename===""){
		  alert('please enter degree name');
		  return null;
	  }

          if(formData.institute===""){
                  alert('please enter name of the institute');
                  return null;
          }


	  if(formData.startYear===""){
                  alert('please enter start year');
                  return null;
          }

	  if(formData.endYear===""){
                  alert('please enter end year');
                  return null;
          }




         //setTimeout(() => {console.log('Hello, World!')}, 5000);
         // setShowForm(false);
         setAddDegreeStatus("adding");
         createedudegree({formData, setAddDegreeStatus});



	
	};

 
      const handleChange=(e)=>{

  
         console.log("name---: ", e.target.value);
         updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim()
                });


      }	


	console.log("formData: ", formData);





return(

<div className={classes.createTicketFormDivParent}>

   {/*!showForm &&  
	   <div className={classes.createTicketFormLoading}>

	   <FadeLoader color={color} loading={loading} css={""} size={50}  />
	    
	   <div className={classes.submittingDiv}> Creating . . . </div>
           </div>
   */}


   { 	
    <form className={classes.createTicketForm} onSubmit={handleSubmit}>

       {/*form close button below*/}	
       <div className={classes.closeButtonDiv}>
          <button onClick={props.onPress} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
       </div>	

 
       {/*logo and field title container below*/}
       <div className={classes.logoAndTitleContainer}>
           <div className={classes.formTitleDiv}><i>  Add a degree </i></div>
       </div>


       <div className={classes.name_div}>
          <div className={classes.name_txt}>Degree name</div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={handleChange}
              name="degreename"
              className={classes.value_field}
              placeholder="e.g Master of Science.."
              defaultValue=""
            />
         </div>
      </div>


      <div className={classes.name_div}>
          <div className={classes.name_txt}>Institute name</div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={handleChange}
              name="institute"
              className={classes.value_field}
              placeholder="e.g. Master of Science.."
              defaultValue=""
            />
         </div>
      </div>

  
    <div className={classes.yearsDiv}>


      <div className={classes.name_div}>
          <div className={classes.name_txt}>Start Year</div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={handleChange}
              name="startYear"
              className={classes.value_field}
              placeholder="e.g. 2021"
              defaultValue=""
            />
         </div>
      </div>


      <div className={classes.name_div}>
          <div className={classes.name_txt}>End Year</div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={handleChange}
              name="endYear"
              className={classes.value_field}
              placeholder="e.g. 2023"
              defaultValue=""
            />
         </div>
      </div>

    </div>


     <div className={classes.name_div}>
          <div className={classes.name_txt}>Marked Obtained</div>
          <div className={classes.name_inputDiv} >
            <input
              type="text"
              onChange={handleChange}
              name="marks"
              className={classes.value_field}
              placeholder="CGPA 8.1 / 80% "
              defaultValue=""
            />
         </div>
      </div>





 

       { addDegreeStatus ==="added" &&
 
	       <div style={{margin:"auto",width:"80%"}}> Degree added successfully!</div>

       }




       <div className={classes.submitButtonDiv}>
       
          { addDegreeStatus ==="notAdded" &&
              <button type="submit"  className= {classes.submit_button} ><b>Add </b> </button>
          }

          { addDegreeStatus ==="adding" &&
              <button type="submit"  className= {classes.submit_button} disabled={true}><b>Adding ... </b> </button>
          }

          { addDegreeStatus ==="added" &&
              <button type="submit"  className= {classes.submit_button} onClick={props.onPress}><b>Close form </b> </button>
          }




       </div>




  </form>






   }


</div>	
);

}


export default CreateCourseForm;
