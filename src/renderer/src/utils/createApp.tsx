import React from "react";
import ReactDOM from "react-dom/client";

import "@renderer/assets/style/index.scss";

const createApp = (App: () => JSX.Element) => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default createApp;
