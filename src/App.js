import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.scss';
import Home from './pages/home/Home';

import { Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/product/ProductList';
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={NewUser} />
          <Route path="/newProduct" component={NewUser} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
