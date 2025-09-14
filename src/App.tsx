
import './App.css'
import { CustomModalPage } from './CustomModalPage';
import { DefaultPage } from './DefaultPage';
import { MainPage } from './MainPage';
import { WorkaroundPage } from './WorkaroundPage';

const App = () => {
  const renderPage = () => {
    switch (window.location.pathname) {
      case '/':
        return <MainPage />;
      case '/default':
        return <DefaultPage />;
      case '/custom-modal':
        return <CustomModalPage />;
      case '/workaround':
        return <WorkaroundPage />;
      default:
        return null;
    }
  };

  return renderPage();
};

export default App
