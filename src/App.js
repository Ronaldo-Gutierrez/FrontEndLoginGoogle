import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home'
import GoogleData from './components/GoogleData'

function App() {

  const [userGoogle, setUserGoogle] = useState({});

return(
  <div>
    <Router>
       <Switch>
        <Route path="/" exact>
          <Home userGoogle={userGoogle} setUserGoogle = {setUserGoogle}/>
        </Route>
        <Route path="/GoogleData" exact>
          <GoogleData />
        </Route>
    </Switch>
    </Router>
   
  </div>
)
}

export default App;
