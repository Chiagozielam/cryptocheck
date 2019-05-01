import React, {Component} from 'react';
import More from './More';
import Landing from './landing';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/more" component={More} />
    </Switch>
);

export default Main ;