import { createBrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

export default router;
