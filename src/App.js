import './App.css';
import Header from './header';
import Counters from './counters';
import { useSelector } from 'react-redux';

function App() {

  const counters = useSelector(state => state.counters);
  return (
    <div>
      <Header count={counters.filter(x => x.value > 0).length}></Header>
      <Counters></Counters>
    </div>
  );
}

export default App;
