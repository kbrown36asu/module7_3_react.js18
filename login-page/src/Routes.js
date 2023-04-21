import { Switch, Route } from 'react-router-dom';
import Login from './componenets/Login';
import Dashboard from './Dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" element={Login} />
            <Route path='/dashboard' element={Dashboard} />
        </Switch>
    );
};

export default Routes;