import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navigation } from 'website-components/navigation';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import { Header } from 'website-components/header';
import { About } from 'website-components/about';
import { Carfilter } from 'website-components/carfilter';
import { Contact } from 'website-components/contact';

//import WebsiteApp from 'WebsiteApp';

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
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="about/ceo-message" element={<About />} />
            <Route path="/products" element={<Carfilter />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    )}
  </StrictMode>
);

reportWebVitals();
