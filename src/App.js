import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import * as actionCreators from './state/action-creators/actionCreators';




function App() {
  const account = useSelector(state => state.account);
  const dispacth = useDispatch();
  
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispacth);
  
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>+1000</button>
      <button onClick={() => withdrawMoney(1000)}>-1000</button>
    </div>
  );
}

export default App;
