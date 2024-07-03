import "./App.css";
import AppRouter from "./router/AppRouter";
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const pageSize = 12;
  return (
    <>
      <Router>
        <Navbar />
        <AppRouter pageSize={pageSize} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
