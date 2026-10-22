import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";

const StyledApp = styled.div`
    width: 100%;
`;

const router = createBrowserRouter([
  {path: "*", Component: Root,
  },
]);

export default function App() {
  return (
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
  );
}