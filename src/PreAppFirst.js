import PreAppSecond from './PreAppSecond';
import {Route,Switch} from 'react-router-dom'
import Register from './CommonApps/Register';
import RegisterV2 from './CommonApps/Akshay/Register';

import RegisterTopper from './CommonApps/Akshay/RegisterTopper';
import RegisterStudent from './CommonApps/Akshay/RegisterStudent';


import Website from './WebSite/Website';

import EATechData from './WebSite/EATechData';


const PreAppFirst=()=>{



return (

<div>

<Switch>

   <Route exact path='/registerasstudent/' >
        <RegisterStudent/>
   </Route>


   <Route exact path='/registerastopper/' >
        <RegisterTopper/>
   </Route>


   <Route  path='/app' >
        <PreAppSecond/>
   </Route>


   <Route exact path="/plcdatalive">
              <EATechData/>
   </Route>





  
   <Route   path='/' >
        <Website/>
   </Route>
  
   
  




</Switch>




</div>
);
}

export default PreAppFirst;
