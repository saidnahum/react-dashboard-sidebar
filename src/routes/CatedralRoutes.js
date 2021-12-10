import { Redirect, Route, Switch } from 'react-router-dom';
import Ppi from '../pages/catedral/Ppi'

// import { Ppi } from '../components/maps/catedral/Ppi';
// import { ppi_gif } from '../components/maps/catedral/ppi_gif';
// import { cmax } from '../components/maps/catedral/cmax';
// import { cmax_gif } from '../components/maps/catedral/cmax_gif';

export const CatedralRoutes = () => {
   return (
      <>
         
         <div>
            <Switch>
               <Route exact path="/catedral/ppi" component={Ppi}/>
               {/* <Route exact path="/catedral/ppi" component={ Ppi }/>
               <Route exact path="/catedral/ppi_gif" component={ ppi_gif }/>
               <Route exact path="/catedral/cmax" component={ cmax}/>
               <Route exact path="/catedral/cmax_gif" component={ cmax_gif }/> */}

               <Redirect to="/" />
            </Switch>
         </div>
      </>
   )
}