
import './App.css';
import PropItUp from './components/PropItUp';

function App() {
  return (
    <div className="App">
     <PropItUp firstName={"Yousef"} lastName={"Assi"} age={2} hairColor={"red"}/>
     <PropItUp firstName={"Raad"} lastName={"Assi"} age={2} hairColor={"Green"}/>

     <PropItUp firstName={"Ahmed"} lastName={"Assi"} age={2} hairColor={"White"}/>

     <PropItUp firstName={"Shalsh"} lastName={"Assi"} age={2} hairColor={"Pink"}/>

    </div>
  );
}

export default App;
