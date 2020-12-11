import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.module.css';
import { Gwanggaeto, Main, Result } from './components';
import GwanggaetoResult from './components/GwaggaetoResult';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Gwanggaeto} exact={true} />
      {/* <Route path="/result" component={Result} /> */}
      <Route path="/ggtresult" component={GwanggaetoResult} />
    </div>
  );
}

export default App;
