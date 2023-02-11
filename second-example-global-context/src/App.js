import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
