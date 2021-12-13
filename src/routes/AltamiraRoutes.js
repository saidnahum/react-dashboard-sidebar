import { Redirect, Route, Switch } from 'react-router-dom';
import { Ppi, Ppi_gif, Cmax, Cmax_gif } from '../pages/altamira/index';

export const AltamiraRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/altamira/ppi" component={Ppi}/>
               <Route exact path="/altamira/ppi_gif" component={Ppi_gif}/>
               <Route exact path="/altamira/cmax" component={Cmax}/>
               <Route exact path="/altamira/cmax_gif" component={Cmax_gif}/>

               <Redirect from='/altamira' to="/altamira/ppi" />
            </Switch>
         </div>
      </>
   )
}