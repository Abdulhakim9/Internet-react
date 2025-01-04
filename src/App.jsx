import React from "react";
import { useTranslation } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import History from "./pages/history/history";
import Layout from "./layout/layout";
import Menu from "./pages/menu/menu";
import Chicken from "./pages/chicken/chicken";
import S1 from "./pages/s1/s1";
import S2 from "./pages/s2/s2";
import S3 from "./pages/s3/s3";
import S4 from "./pages/s4/s4";


const App = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/history", element: <History /> },
        { path: "/menu", element: <Menu /> },
        { path: "/chicken", element: <Chicken /> },
        { path: "/s4", element: <S4 /> },
        { path: "/s1", element: <S1 /> },
        { path: "/s2", element: <S2 /> },
        { path: "/s3", element: <S3 /> },
      ],
    },
  ]);
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
