import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./container/CakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
