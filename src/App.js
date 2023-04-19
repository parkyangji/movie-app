import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);

export default App;
