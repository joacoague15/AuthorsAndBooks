import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Books from './components/Books';
import BooksDetails from './components/BooksDetails';
import Genres from './components/Genres';
import DeleteBook from './components/DeleteBook';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';
import Login from './components/authorizations/Login';
import SignUp from './components/authorizations/SignUp';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/books' component={Books} />
                <Route exact path='/genres/:id' component={Genres} />
                <Route exact path='/books/:id' component={BooksDetails} />
                <Route exact path='/delete/:id' component={DeleteBook} />
                <Route exact path='/create' component={CreateBook} />
                <Route exact path='/update/:id' component={UpdateBook} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </Layout>
    </Router>
);

export default App;