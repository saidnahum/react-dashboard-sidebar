import { Redirect, Route, Switch } from 'react-router-dom';
import { Ppi, Ppi_gif, Cmax, Cmax_gif } from '../pages/catedral/index';

export const CatedralRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/catedral/ppi" component={Ppi}/>
               <Route exact path="/catedral/ppi_gif" component={Ppi_gif}/>
               <Route exact path="/catedral/cmax" component={Cmax}/>
               <Route exact path="/catedral/cmax_gif" component={Cmax_gif}/>

               <Redirect from='/catedral' to="/catedral/ppi" />
            </Switch>
         </div>
      </>
   )
}