import { Redirect, Route, Switch } from 'react-router-dom';
import { Ppi, Ppi_gif, Cmax, Cmax_gif } from '../pages/cabos/index';

export const CabosRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/cabos/ppi" component={Ppi}/>
               <Route exact path="/cabos/ppi_gif" component={Ppi_gif}/>
               <Route exact path="/cabos/cmax" component={Cmax}/>
               <Route exact path="/cabos/cmax_gif" component={Cmax_gif}/>

               <Redirect from='/cabos' to="/cabos/ppi" />
            </Switch>
         </div>
      </>
   )
}