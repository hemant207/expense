import './App.css';
import ExpenssForm from './component/ExpenssForm';
import ExpenssData from './component/ExpenssData';


function App() {
  return (
    <div className="App ">
      <h1>Expenss tracker</h1>
      <ExpenssForm/>
      <ExpenssData/>
    </div>
  );
}

export default App;
