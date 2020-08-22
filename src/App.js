import React from "react";

import ContentModel from "./pages/content-model/content-model";
import AddContentModel from "./pages/content-model/add";
import ContentModelHome from "./pages/content-model/index";
import { Router } from "@reach/router";
import Index from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Index path="/"></Index>
        <ContentModel path="/content-model">
          <ContentModelHome path="/"></ContentModelHome>
          <AddContentModel path="add"></AddContentModel>
        </ContentModel>
      </Router>
    </div>
  );
}

export default App;
