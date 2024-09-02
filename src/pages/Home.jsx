import { Wrapper } from "../wrappers/Home";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Objectives,
  Sidebar,
  Slider,
} from "../components";
import { useState } from "react";
import { useAppContext } from "../App";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme, setTheme } = useAppContext();

  return (
    <Wrapper>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        theme={theme}
        setTheme={setTheme}
      />

      <Navbar
        theme={theme}
        setTheme={setTheme}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      {/* <Outlet /> */}
      <Hero />
      <About />
      <Slider />
      <Objectives />
      <Contact />
      <Footer />
    </Wrapper>
  );
};
export default Home;
