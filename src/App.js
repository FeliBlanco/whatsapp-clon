
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Inicio from './routes/Inicio/index'
function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component={Inicio}/>
        </Switch>
    </Router>
  );
}

export default App;
