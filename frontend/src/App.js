import { useAuthContext } from "./hooks/useAuthContext";
import { RouterProvider } from "react-router-dom";

// router
import { router } from "./router";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
