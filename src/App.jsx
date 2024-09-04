import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";
import { KnowMore } from "./components";
import { createContext, useContext, useEffect, useState } from "react";
import { action as contactAction } from "./components/Contact";
const AppContext = createContext();
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    action: contactAction,
  },
  {
    path: "/about-us",
    element: <KnowMore />,
  },
]);
const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};

function App() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router}></RouterProvider>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

export default App;
