import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return (

      <Router>
        <Routes>

          <Route
            path='/'
            exact={true}
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />

          <Route
            path='/about'
            exact={true}
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            } />

        </Routes>
      </Router>

    );
  }
}

export default App;
