import './App.css';
import Header from './header';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import store from './store/store';


function App() {

  return (
    <div>
      <Header count={store.getState().counters.filter(x => x.value > 0).length}></Header>
    </div>
  );
}

export default App;
