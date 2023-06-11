import { createBrowserRouter } from 'react-router-dom';
import SignUp from '@Routes/SignUp';
import SignIn from '@Routes/SignIn';
import Todo, { loader as todoLoader } from '@Routes/Todo';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/todo',
    element: <Todo />,
    loader: todoLoader,
  },
]);

export default router;
