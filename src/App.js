import React, { useEffect } from 'react';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/ImageHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ImagePage from './content/ImagePage';

const App = () => {
    
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/images" component={ImagePage} />
          </Switch>
        </Content>
      </>
    );
  }

export default App;
