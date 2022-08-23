import Footer from './components/Footer.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import WorkScreen from './screens/WorkScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/work' component={WorkScreen} exact />
      <Route path='/contact' component={ContactScreen} exact />
      <Footer></Footer>
    </Router>
  );
}

export default App;
