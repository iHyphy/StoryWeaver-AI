import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
<<<<<<< HEAD
import CharacterSheet from './pages/charactersheet.jsx';
import Encounters from './pages/encounters.jsx';
import Monsters from './pages/monsters.jsx';
import Profile from './pages/profile.jsx';
import Login from './pages/login.jsx';
import SignOut from './pages/signout.jsx';
import SignUp from './pages/signup.jsx';
=======
import CharacterSheet from '../src/pages/CharacterSheet.jsx'
import Gameboard from '../src/pages/Gameboard.jsx';
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
<<<<<<< HEAD
      },
      {
        path: '/charactersheet',
        element: <CharacterSheet />
      },
      {
        path: '/encounters',
        element: <Encounters />
      },
      {
        path: '/monsters',
        element: <Monsters />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signout',
        element: <SignOut />
      },
      {
        path: '/signup',
        element: <SignUp />
      }

    ]
  }
=======
      }, 
      {
        path: '/charactersheet',
        element: <CharacterSheet />
      }, 
      {
        path: '/gameboard',
        element: <Gameboard />
      }
    ],
  },
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
