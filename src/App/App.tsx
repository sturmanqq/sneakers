import styles from './App.module.scss';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


function App() {
  return (
    <div className={styles.app}> 
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
