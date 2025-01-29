import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DepartmentProvider } from "./context/DepartmentProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DepartmentProvider>
      <App />
    </DepartmentProvider>
  </BrowserRouter>
);
