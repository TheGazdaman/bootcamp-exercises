import React from "react";
import { Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar.jsx';
import Companies from './Companies.jsx';
import Users from './Users.jsx';
import Contact from './Contact.jsx'
import Sidebar from './Sidebar.jsx';
import history from './history';

const App = () => {
  return (
    <>
      <Router history={history} >
        
        <Navbar />
        <Sidebar />

        <Switch>
          <Route path='/companies' >
            <Companies />
          </Route>
          
          <Route path='/users'> 
            <Users  />
          </Route>
          
          <Route path='/contact'> 
            <Contact />
          </Route>
          
        </Switch> 

      </Router>
    </>
  )
}
 
export default App
