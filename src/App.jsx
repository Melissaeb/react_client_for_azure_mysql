import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  useParams,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Countries } from "./Countries";
import { Population } from "./Population";
import { Country } from "./Country";

const queryClient = new QueryClient();
// ErrorElement component
import PropTypes from "prop-types";

function ErrorElement({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

ErrorElement.propTypes = {
  error: PropTypes.object.isRequired,
};

function App() {
  // let { countryname, continent } = useParams();
  // console.log(countryname);
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary FallbackComponent={ErrorElement}>
          <Layout />
        </ErrorBoundary>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "allcountries",
          element: <Countries />,
        },
        // Uncomment the following lines to add the routes for the Population and Country components
        {
          path: "population/:continent",
          element: <Population />,
        },
        {
          path: "country/:countryname",
          element: <Country />,
        },
      ],
    },
  ]);
  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
