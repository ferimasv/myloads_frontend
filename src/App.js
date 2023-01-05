import {pages} from "./router/PageRouter";
import {RouterProvider} from "react-router-dom";
import './css/App.css';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <RouterProvider router={pages}/>
        </div>
    );
}

export default App;
