import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignIn from './SignIn'; 

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
            <switch>
              <Route exact path="/">
                <SignIn/>
              </Route>
            </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
