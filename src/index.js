import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'mdb-ui-kit/css/mdb.min.css'; // MDB CSS
import 'mdb-ui-kit/js/mdb.min'; // MDB JS
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//website imports
import React from 'react';
import './index.css';

// scroll bar
import 'simplebar/src/simplebar.css';
// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import WebsiteApp from 'WebsiteApp';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //
//const [isLogin, setIsLogin] = useState(false);
let isLogin = false;
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//if islogin false
root.render(
  <StrictMode>
    {isLogin ? (
      <ReduxProvider store={store}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ReduxProvider>
    ) : (
      <ReduxProvider store={store}>
        <WebsiteApp />
      </ReduxProvider>
    )}
  </StrictMode>
);

reportWebVitals();
