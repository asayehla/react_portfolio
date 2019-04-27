import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hello from './components/Hello.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import './css/tailwind.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-full fixed pin-l pin-y">
        <Header />
        <div className="px-4 pt-4 flex-1 overflow-y-scroll">
          <Switch>
            <Route exact path='/' component={Hello}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/projects' component={Projects}></Route>
          </Switch>

        </div>
        <Footer />
      </div >
    </div >
  );
}

export default App;
