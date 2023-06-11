import { createBrowserRouter } from 'react-router-dom';
import Signup from './Signup';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
