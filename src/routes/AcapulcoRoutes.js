import { Redirect, Route, Switch } from 'react-router-dom';
import { Ppi, Ppi_gif, Cmax, Cmax_gif } from '../pages/acapulco/index';

export const AcapulcoRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/acapulco/ppi" component={Ppi}/>
               <Route exact path="/acapulco/ppi_gif" component={Ppi_gif}/>
               <Route exact path="/acapulco/cmax" component={Cmax}/>
               <Route exact path="/acapulco/cmax_gif" component={Cmax_gif}/>

               <Redirect from='/acapulco' to="/acapulco/ppi" />
            </Switch>
         </div>
      </>
   )
}