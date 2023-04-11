import styles from './App.module.scss';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from '../RootPage/RootPage';
import WelcomePage from '../components/WelcomePage/WelcomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element: <WelcomePage/>},
      {
        path: '/products',
        element: <Content/>,
      },
    ]
  }
]);

function App() {
  return ( 
    <div className={styles.app}> 
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;


