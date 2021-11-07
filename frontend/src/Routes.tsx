import Dashboard from 'Pages/Dashboard';
import Home from 'Pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => { // a função pode ser declarada assim também
    //function NavBar() { ou assim
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;