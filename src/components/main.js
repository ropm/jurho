//stateless
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landingpage from './landingpage';
import About from './about';
import Contact from './contact';
import Matches from './matches';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Landingpage} />
        <Route path='/about' component={About} />
        <Route path='/matches' component={Matches} />
        <Route path='/contact' component={Contact} />
    </Switch>
);

export default Routes;
