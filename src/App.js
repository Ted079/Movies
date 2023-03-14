import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./components/Routes/AppRoutes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>
    </div>
  );
};

export default App;
