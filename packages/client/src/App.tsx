import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Listing, Detail, Simulator, ErrorPage } from "@/pages/";
import useMissions from "@/hooks/useMissions";

function App() {
  const { missions, status } = useMissions();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Listing missions={missions} status={status} />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/mission/:missionId",
      element: <Detail missions={missions} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/simulator",
      element: <Simulator />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
