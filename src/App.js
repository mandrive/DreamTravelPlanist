import React, { Component } from 'react';
import { MainContainer }  from './containers';
import Button from 'material-ui/Button';
import * as MaterialUi from 'material-ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer>
          <MaterialUi.AppBar>
            
          </MaterialUi.AppBar>
          <span>Hello</span>
          <Button raised color="primary">Click</Button>
        </MainContainer>
      </div>
    );
  }
}

export default App;
