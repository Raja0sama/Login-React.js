import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Home from './Screens/Home';



class App extends React.Component {


  render(){
	return (
		<Router>
			<Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      
		</Router>
	);
}
}

export default App;
