import React from "react";
import ReactDom from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => (
	<DataProvider endpoint="/api/v1/leads/" render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("app");

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={App} />
  </Router>
);

wrapper ? ReactDom.render(<AppRouter />, wrapper) : null;

