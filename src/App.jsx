import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { KnowMore } from "./components";
import { createContext, useContext, useEffect, useState } from "react";
import { action as contactAction } from "./components/Contact";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
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
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
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
