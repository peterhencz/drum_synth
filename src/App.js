import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

import Maschine from "./components/Maschine/Maschine";

import "./index.scss";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="c">
        <Maschine />
      </div>
    </Provider>
  );
}

export default App;
