import Login from "./component/Login";
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import Chats from "./component/Chats";



function App() {
  return (
    <div className="App">

<AuthContextProvider>

<Switch>
  <Route path="/chats" component={Chats} />
<Route path="/" component ={Login} />
</Switch>

</AuthContextProvider>


    </div>
  );
}

export default App;
