import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./Components/Projects/Projects.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.js";

// Define Routes Separately for Clean Code
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

// Render the App with Redux and React Router
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
