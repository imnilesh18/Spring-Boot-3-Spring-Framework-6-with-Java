import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponenet from './ThirdComponenet'
import FourthComponenet from './FourthComponenet'

export default function LearningComponent() {
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