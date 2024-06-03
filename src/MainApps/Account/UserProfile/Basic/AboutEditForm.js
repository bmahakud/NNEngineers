import React,{useState,useEffect} from "react";
import classes from "./AboutEditForm.module.css";
import {AiFillCloseCircle} from "react-icons/ai";
import logoImage from '../../../../CommonApps/BWlogo.JPG'
import {getuser,putuser, putuserprofile} from '../../../../CommonApps/AllAPICalls';



const AboutEditForm=(props)=>{





 const [editState, setEditState] = useState("notSaved");



const initialFormData = Object.freeze( {
                firstname: props.userData.firstname,
	        lastname:props.userData.lastname,
	        email: props.userData.email,
	        phoneno: props.userData.phoneno,
	        gender: props.userData.gender,
	        languages: props.userData.languages, 
	        targetexam: props.userData.targetexam,
	        targetyear: props.userData.targetyear,
	        dateofbirth: props.userData.dateofbirth,
	        institute: props.userData.institute,
	        city: props.userData.city,
	        state: props.userData.state,
	        country: props.userData.country,
	        hobby: props.userData.hobby,
	        otherinfo: props.userData.otherinfo
        });



const [formData, updateFormData] = useState(initialFormData);

const handleChange = (e) => {
                updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
        };




 const reloadHandler=()=>{

   props.rerender();

 }



const handleSubmit = (e) => {
		e.preventDefault();
                setEditState("saving"); 
                putuser({formData,  setEditState, reloadHandler});

	};

   console.log("formData: ", formData);


return(

<div className={classes.aboutEditFormDivParent}>

  <form className={classes.aboutEditForm} onSubmit={handleSubmit}>

     <div className={classes.closeButtonDiv}>
        <button onClick={props.onPress} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
     </div>	


     <div className={classes.logoAndTitleContainer}>
	   <div style={{height:"20px"}}> </div>
           <div className={classes.titleDiv}><i>  Edit profile : About </i></div>
     </div>




     <div className={classes.name_div}>
	  <div className={classes.name_txt}>Firstname</div>
	  <div className={classes.name_inputDiv} >
	    <input
              type="text"
              onChange={handleChange}
              name="firstname"
              className={classes.value_field}
              placeholder="firstname"
	      defaultValue={formData.firstname}
            />
         </div>
     </div>


     <div className={classes.name_div}>
	<div className={classes.name_txt}>Lastname</div>
	<div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="lastname"
              className={classes.value_field}
              placeholder="lastname"
	      defaultValue={formData.lastname}
           />
       </div>
     </div>


     <div className={classes.name_div}>
        <div className={classes.name_txt}>Email</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="email"
              className={classes.value_field}
              placeholder="email"
              defaultValue={formData.email}
           />
       </div>
     </div>


    <div className={classes.name_div}>
        <div className={classes.name_txt}>PhoneNo</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="phoneno"
              className={classes.value_field}
              placeholder="phoneno"
              defaultValue={formData.phoneno}
           />
       </div>
     </div>


    <div style={{display: "flex", width:"85%"}}>

     <div className={classes.name_div}>
        <div className={classes.name_txt}>Target Exam</div>
        <div className={classes.name_inputDiv} >
           <select name="targetexam"  onChange={handleChange} type="text" className={classes.value_field} defaultValue={formData.targetexam}>
            <option value="genderDefault" disabled>Choose exam</option>
            <option value="UPSC">UPSC</option>
            <option value="CAT">CAT</option>
	    <option value="GATE">GATE</option>
            <option value="IITJEE">IIT JEE</option>
	    <option value="NEET">NEET</option>
          </select>

       </div>
     </div>

     <div className={classes.name_div}>
        <div className={classes.name_txt}>Target Year</div>
        <div className={classes.name_inputDiv} >

	 <select name="targetyear"  onChange={handleChange} type="text" className={classes.value_field} defaultValue={formData.targetyear}>
            <option value="targetDefault" disabled>Choose Target year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
	    <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
          </select>

       </div>
     </div>

    </div>














      <div className={classes.name_div}>
        <div className={classes.name_txt}>Gender</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="gender"
              className={classes.value_field}
              placeholder="gender"
              defaultValue={formData.gender}
           />
       </div>
     </div>


     <div className={classes.name_div}>
        <div className={classes.name_txt}>Date of birth</div>
        <div className={classes.name_inputDiv}>
            <input
             type="date"
             onChange={handleChange}
             name="dateofbirth"
             className={classes.value_field}
             placeholder="date of birth"
             defaultValue={formData.dateofbirth}
            />
        </div>

     </div>











      <div className={classes.name_div}>
        <div className={classes.name_txt}>Languages</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="languages"
              className={classes.value_field}
              placeholder="languages"
              defaultValue={formData.languages}
           />
       </div>
     </div>


     
     <div className={classes.name_div}>
        <div className={classes.name_txt}>Institute</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="institute"
              className={classes.value_field}
              placeholder="institute"
              defaultValue={formData.institute}
           />
       </div>
     </div>


      <div className={classes.name_div}>
        <div className={classes.name_txt}>Current City</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="city"
              className={classes.value_field}
              placeholder="city"
              defaultValue={formData.city}
           />
       </div>
     </div>
     

     <div className={classes.name_div}>
        <div className={classes.name_txt}>Current State</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="state"
              className={classes.value_field}
              placeholder="state"
              defaultValue={formData.state}
           />
       </div>
     </div>




    <div className={classes.name_div}>
        <div className={classes.name_txt}>Hobby</div>
        <div className={classes.name_inputDiv} >
           <input
              type="text"
              onChange={handleChange}
              name="hobby"
              className={classes.value_field}
              placeholder="hobby"
              defaultValue={formData.hobby}
           />
       </div>
     </div>













     {/*
     <div className={classes.dob_div}>
	<div className={classes.dob_txt}>Dates of birth</div>
	<div className={classes.dob_innerDiv}>
	  <div className={classes.dob_innerDiv2}>
	    <input
             type="date"
             onChange={handleChange}
             name="dateofbirth"
             className={classes.dateofbirth_field}
             placeholder="date of birth"

            />
	  </div>
        </div>

     </div>
    */}













       { editState ==="saved" &&
            <div style={{marginTop:"20px"}}> Saved Successfully!</div>
         }



     <div className={classes.submitButtonDiv}>
	{ editState ==="notSaved" &&
          <button type="submit"  className= {classes.submit_button} ><b>Save </b> </button>
         }

          { editState ==="saving" &&
          <button type="submit"  className= {classes.submit_button} disabled={true}><b>Saving... </b> </button>
         }


	 { editState ==="saved" &&
          <button type="submit"  className= {classes.submit_button} onClick={props.onPress}><b>Close form </b> </button>
         }






     </div>


  </form>

</div>	
);

}


export default AboutEditForm;
