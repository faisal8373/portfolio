import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from '../aboutMe/AboutMe'
import ContactMe from '../contactMe/ContactMe';
import SkillSet from '../skillset/SkillSet';
import Home from '../home/Home';
import TopBar from '../TopBar';
import Footer from '../footer/Footer';

export default function Routing() {
    return (
        <Router >
        <div>
          <TopBar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/contactMe">
            <ContactMe />
          </Route>
          <Route path="/skillSet">
            <SkillSet />
          </Route>
        </Switch>  
        <Footer />
        </div>
        </Router>
    )
}
