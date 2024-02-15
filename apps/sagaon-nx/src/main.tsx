import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { C4040 } from './app/components/C4040';
import { C1610 } from './app/components/C1610';
const router = createBrowserRouter([
  {
    path: '/',
    element: <C4040 />,
  },
  {
    path: '/1001',
    element: <C1610 />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
