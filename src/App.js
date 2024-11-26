import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import Home from "./components/Home.jsx";
import BicyclesPage from "./components/Bicycles.jsx";
import Navbar from "./components/Navbar.jsx";
import BicycleInfo from "./components/BicycleInfo.jsx";
// import Accessories from "./components/Accessories.jsx";
// import AccessoryPage from "./components/AccessoryPage.jsx";

const App = () => {
  // Custom hook for footer scroll functionality
  const useFooterScroll = () => {
    const footerRef = useRef(null);
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return { footerRef, scrollToFooter };
  };

  const { footerRef, scrollToFooter } = useFooterScroll();

  // Route configuration
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/bicycles", element: <BicyclesPage /> },
    { path: "/bicycles/:id", element: <BicycleInfo /> }
  ];

  return (
    <div className="app-container">
      <Router>
        <Navbar scrollToFooter={scrollToFooter} />
        <main>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <div ref={footerRef} />
      </Router>
    </div>
  );
};

export default App;