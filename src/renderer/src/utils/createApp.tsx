import ReactDOM from "react-dom/client";

import "@renderer/assets/style/index.scss";

const createApp = (App: () => JSX.Element) => {
  // React.StrictMode严格模式会导致useEffect执行两次
  // ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
};

export default createApp;
