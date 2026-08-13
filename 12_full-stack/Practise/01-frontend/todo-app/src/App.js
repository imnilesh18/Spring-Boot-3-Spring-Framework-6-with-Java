import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import {FifthComponent} from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponenet from './components/learning-examples/ThirdComponenet'
import FourthComponenet from './components/learning-examples/FourthComponenet'

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponenet />
      <FourthComponenet />
      <FifthComponent />
    </div>
  );
}

export default App;
