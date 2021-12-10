import {
   BrowserRouter as Router,
   Switch,
   Redirect,
   Route,
} from 'react-router-dom';
import { CatedralRoutes } from './CatedralRoutes';
import Home from '../pages/Home';
import SideMenu from '../components/SideMenu';
import { useState } from 'react';

export const AppRoutes = () => {

   const [inactive, setInactive] = useState(false);

   return (
      <div>
         <SideMenu inactive={inactive} setInactive={setInactive}/>
         <div className={`ml-80 ${inactive && 'ml-20'} transition-all duration-500 bg-red-200 h-screen`}>
            <Router >
               <div>
                  <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/catedral" component={CatedralRoutes} />
      
                     <Redirect to="/" />
                  </Switch>
               </div>
            </Router >
         </div>
      </div>
   )
}