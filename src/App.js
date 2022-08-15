import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Share/NotFound";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <HashRouter>
          <Routes>
            
            <Route path="/" element={<Home />}>
              <Route index element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/works" element={<Portfolio />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </ContextProvider>
    </>
  );
}

export default App;
