import Content from '../components/Content/Content';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from '../RootPage/RootPage';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import FooterPage from '../components/Footer/FooterPage/FooterPage';

function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element: <WelcomePage/>},
      {
        path: 'products',
        element: <Content/>,
      },
      {
        path: 'footerPage',
        element: <FooterPage/>,
      },
    ]
  }
]);

  return ( 
      <RouterProvider router={router}/>
  );
}

export default App;


