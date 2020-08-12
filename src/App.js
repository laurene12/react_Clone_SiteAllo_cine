import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Movies from "./components/pages/Movies";
import { Store } from "./ReduxStorage/Store";
import { Provider } from "react-redux";
import PageSearch from "./components/pages/PageSearch";

const App = () => {
  return (
    <Provider store={Store}>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={Movies} exact />
          <Route path="/movie/:id" component={Details} exact />
          <Route path="/search" component={PageSearch} exact />
        </Switch>
      </main>
    </Provider>
  );
};

export default App;
