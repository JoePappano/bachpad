import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Ad1 from "./components/Ad1";
import Jumbo from "./components/Jumbo"
import Pics from "./components/Pics"
import Stories from "./components/Stories"
import Videos from "./components/Videos"


function App() {
  return (
    <div>
       <BrowserRouter>
                <div>
                    <Navigation/>
                    <Ad1/>
                      <Switch>
                          <Route path="/" component={Jumbo} exact/>
                          <Route path="/pics" component={Pics} />
                          <Route path="/stories" component={Stories} />
                          <Route path="/videos" component={Videos} />
                          {/* <Route path="/createAccount" component={createAccount} /> */}
                      </Switch>
                      
                      {/* <Jumbo/> */}
                    {/* <FootComp/> */}
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
