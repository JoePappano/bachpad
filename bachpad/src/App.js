import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Ad1 from "./components/Ad1";
import Jumbo from "./components/Jumbo"


function App() {
  return (
    <div>
       <BrowserRouter>
                <div>
                    <Navigation/>
                      <Switch>
                          {/* <Route path="/" component={Jumbotron} exact/>
                          <Route path="/signIn" component={SignIn} />
                          <Route path="/createListing" component={CreateListing} />
                          <Route path="/createProviderAccount" component={BecomeAProvider} />
                          <Route path="/createUser" component={NewUser} />
                          <Route path="/listingsTable" component={ListingsTable} />
                          <Route path="/errors" component={Errors} /> */}
                          {/* <Route path="/createAccount" component={createAccount} /> */}
                      </Switch>
                      <Ad1/>
                      <Jumbo/>
                    {/* <FootComp/> */}
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
