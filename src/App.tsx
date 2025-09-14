
import './App.css'
import { CustomModalPage } from './CustomModalPage';
import { DefaultPage } from './DefaultPage';
import { MainPage } from './MainPage';
import { WorkaroundPage } from './WorkaroundPage';

const basename = '/react-aria-focus';

const App = () => {
  const renderPage = () => {
    const path = window.location.pathname.replace(basename, '') || '/';

    switch (path) {
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
