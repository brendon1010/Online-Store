import { Provider } from "react-redux";
import "./App.css";
import MyRoutes from "./components/MyRoutes";
import store from "./components/store/store";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <NavBar/>
        <MyRoutes />
      </Provider>
    </div>
  );
}

export default App;
