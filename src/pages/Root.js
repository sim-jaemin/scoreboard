import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {ScoreBoard} from "./ScoreBoard";
import {Menu} from "./Menu";

export class Root extends React.Component {

  render() {
	return (
		<BrowserRouter>
		  <Menu></Menu>
		  <Switch>
		  <Route exact path="/" component={Home}></Route>
		  <Route path="/heroes" component={Heroes}></Route>
		  <Route path="/scroeboard" component={ScoreBoard}></Route>
		  </Switch>
		</BrowserRouter>
	);
  }
}