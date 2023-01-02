import {pages} from "./router/PageRouter";
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={pages}/>
    </div>
  );
}

export default App;
