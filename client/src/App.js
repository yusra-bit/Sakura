import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/register">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>

    
  );
}

export default App;
