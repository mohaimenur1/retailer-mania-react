/** @format */

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./route/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
