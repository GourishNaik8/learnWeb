import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Router>
        <Header />

        <main>
          {children ? (
            children
          ) : (
            <Switch>
              <Route path="/inspace">
                <InspacePage />
              </Route>
              <Route path="/createspace">
                <CreatSpacePage />
              </Route>
            </Switch>
          )}
        </main>
        
      </Router>
      <footer></footer>
    </div>
  );
};

export default Layout;
