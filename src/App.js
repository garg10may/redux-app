import './App.css';
import Header from './header';
import store from './store/store';
import Counter from './counter';
import Counters from './counters';

function App() {

  return (
    <div>
      <Header count={store.getState().counters.filter(x => x.value > 0).length}></Header>
      <Counters></Counters>
    </div>
  );
}

export default App;
