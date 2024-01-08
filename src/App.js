import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Header from "./components/shared/header/Header";

function App() {
  // const Home = () => <div>Home Page</div>;
  // const About = () => <div>About Page</div>;
  // const Contact = () => <div>Contact Page</div>;
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
