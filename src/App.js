import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import Home from './pages/Home/index';
import Product from './pages/Product';

function App() {
  return (
    <Provider store={store}>
    
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/product/:id" exact={true} component={Product}/>
          </Switch>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
