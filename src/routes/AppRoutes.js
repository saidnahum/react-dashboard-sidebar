import {
   BrowserRouter as Router,
   Switch,
   Redirect,
   Route,
} from 'react-router-dom';
import { CatedralRoutes } from './CatedralRoutes';
import { AltamiraRoutes } from './AltamiraRoutes';
import { CabosRoutes } from './CabosRoutes';
import { SabancuyRoutes } from './SabancuyRoutes';
import { AcapulcoRoutes } from './AcapulcoRoutes';

import Home from '../pages/Home';
import SideMenu from '../components/SideMenu';
import { useState } from 'react';

export const AppRoutes = () => {

   const [inactive, setInactive] = useState(false);

   return (
      <div>
         
         
            <Router >
               <SideMenu inactive={inactive} setInactive={setInactive}/>
               <div className={`ml-[224px] ${inactive && 'ml-20'} transition-all duration-500`}>
                  <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/catedral" component={CatedralRoutes} />
                     <Route path="/altamira" component={AltamiraRoutes} />
                     <Route path="/cabos" component={CabosRoutes} />
                     <Route path="/sabancuy" component={SabancuyRoutes} />
                     <Route path="/acapulco" component={AcapulcoRoutes} />
      
                     <Redirect to="/" />
                  </Switch>
               </div>
            </Router >

      </div>
   )
}