import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { PageLoader } from "./components/PageLoader";
import Mainpage from "./pages/Mainpage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        // "routes"
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
