import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Services />
    </div>
  );
}

export default App;
