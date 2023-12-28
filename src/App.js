import { Provider } from "react-redux";
import "./App.css";
import MyRoutes from "./components/MyRoutes";
import store from "./components/store/store";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";

function App() {

  const loggedIn = useSelector((state) => state.signup.loggedIn)

  return (
    <div className="App">
      <Provider store={store}>
        {loggedIn && <NavBar/>}
        <MyRoutes />
      </Provider>
    </div>
  );
}

export default App;
