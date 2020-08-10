import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar';
import UsersList from './Components/UsersList';
import AddUserScreen from './Components/AddUserScreen';
import EditUserScreen from './Components/EditUserScreen';


const App = () => {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/UsersList">
            <UsersList/>
          </Route>
          <Route path="/Add">
            <AddUserScreen/>
          </Route>
          <Route path="/EditUsers">
            <EditUserScreen/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
