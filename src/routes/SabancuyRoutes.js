import { Redirect, Route, Switch } from 'react-router-dom';
import { Ppi, Ppi_gif, Cmax, Cmax_gif } from '../pages/sabancuy/index';

export const SabancuyRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/sabancuy/ppi" component={Ppi}/>
               <Route exact path="/sabancuy/ppi_gif" component={Ppi_gif}/>
               <Route exact path="/sabancuy/cmax" component={Cmax}/>
               <Route exact path="/sabancuy/cmax_gif" component={Cmax_gif}/>

               <Redirect from='/sabancuy' to="/sabancuy/ppi" />
            </Switch>
         </div>
      </>
   )
}