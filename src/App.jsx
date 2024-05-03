import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/videos",
          element: <Videos />,
        },
        {
          path: "/upload",
          element: <Upload />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
