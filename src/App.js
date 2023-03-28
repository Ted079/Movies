import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./components/Routes/AppRoutes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppRoutes/>
      </Router>
    </div>
  );
};

export default App;
