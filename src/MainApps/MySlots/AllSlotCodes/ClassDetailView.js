import React,{useRef, useState, useEffect} from 'react';
import classes from './ClassDetailView.module.css'
//import DetailContentDiv from '../../../../../Classes/ClassDetailView/DetailChildContentDiv';






const ClassDetailView=(props)=>{

 const isMounted = useRef(false);

 useEffect(() => {
    isMounted.current = true;
    props.passOneClassMountInfo(true);
    return () => {
            isMounted.current = false
            props.passOneClassMountInfo(false);
    }
   }, [props]);


  console.log("One Class Detail Mounted", isMounted);


  const [classId, setClassId] = useState(null);

    useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Use regular expressions to find the last digit in the path
    const matches = currentPath.match(/\/(\d+)$/);

    if (matches && matches.length >= 2) {
      // Set the last digit as a state variable
      setClassId(parseInt(matches[1], 10));
    }
  }, []);






   return  <>
	   {/*props.classId ===null && <div style={{color:"grey"}}> Loading ... </div>*/}	

   	   {/*props.classId !==null &&	<DetailContentDiv classId={props.classId}
		                                          userData={props.userData}
			                                  />
	   

	   */}

           </>

}

export default ClassDetailView;
