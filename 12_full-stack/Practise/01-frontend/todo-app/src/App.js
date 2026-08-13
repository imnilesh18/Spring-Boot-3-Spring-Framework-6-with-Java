import './App.css';
import {Component} from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponenet />
      <FourthComponenet />
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="FirstComponent">First Component</div>
  );
}

function SecondComponent() {
  return (
    <div className="SecondComponent">Second Component</div>
  );
}

class ThirdComponenet extends Component {
  render() {
    return (
      <div className="ThirdComponent">Third Component</div>
    )
  }
}

class FourthComponenet extends Component {
  render() {
    return (
      <>
        <div className="FourthComponenet">Fourth Component</div>
        <div className="FourthComponenet">Fourth Component</div>
      </>
    )
  }
}

export default App;
