import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
import Navbar from "./Components/navbar/navbar";



const App = () => {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
