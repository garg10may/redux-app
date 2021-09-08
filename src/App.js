import './App.css';
import Header from './header';
import store from './store/store';
import Counters from './counters';
import { incrementCount } from './store/actions';

function App() {

  console.log(store);

  store.subscribe(() => {
    console.log("Store changed", store.getState())
  })

  return (
    <div>
      {/* <Header count={store.getState().counters.filter(x => x.value > 0).length}></Header> */}
      {/* <Counters></Counters> */}
      {store.getState()}
      {store.subscribe(()=> store.getState())}
      <button onClick={() => store.dispatch(incrementCount(5))} >Click me</button>
      <div></div>
    </div>
  );
}

export default App;
