import { createBrowserRouter } from 'react-router-dom';
import PageAccueil from '../App';
import HomeTennis from '../tennis/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAccueil />,
  },
  {
    path: "/tennis",
    element: <HomeTennis />,
  }
]);