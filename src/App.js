import React, { Fragment, useEffect } from "react";
import SearchBAr from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    //Intit Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store= {store}>
      <Fragment>
        <SearchBAr />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
