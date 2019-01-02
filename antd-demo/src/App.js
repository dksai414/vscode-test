import React, { Component } from 'react';
//import Button from 'antd/lib/button';
import './App.css';
//import { ReactComponent as Logo } from './logo.svg';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
       <small><b>{process.env.REACT_APP_VERSION}</b> </small>
       <small><b>{process.env.REACT_APP_SECRET_CODE}</b></small>
        <Button type="primary">{window.dml}</Button>
      </div>
    );
  }
}

export default App;