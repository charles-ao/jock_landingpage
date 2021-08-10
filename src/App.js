import './App.css';
import Home from './components/Home'
import SideNav from './components/SideNav'
import Search from './components/Search'
import { useGlobalContext } from './context';


function App() {

  const {state} = useGlobalContext();

  return (
    <div className="App">
      {state}
      <Home />
      <SideNav/>
      <Search />
    </div>
  );
}

export default App;
