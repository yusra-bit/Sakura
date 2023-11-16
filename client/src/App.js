import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
