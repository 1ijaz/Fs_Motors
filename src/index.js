import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navigation } from 'website-components/navigation';
import { StrictMode, useEffect, useState } from 'react';
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
import { CeoMessage } from 'website-components/ceo-message';
import CarDetails from 'website-components/CarDetails';
import { Team } from 'website-components/Team';
import { Login } from 'website-components/login';

//import WebsiteApp from 'WebsiteApp';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //
//const [isLogin, setIsLogin] = useState(false);

const AppWrapper = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLoginLocalStorage') === 'true');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedIsLogin = localStorage.getItem('isLoginLocalStorage') === 'true';

      if (updatedIsLogin !== isLogin) {
        setIsLogin(updatedIsLogin);
        if (updatedIsLogin) {
          window.location.href = '/dashboard/default'; // Navigate to '/dashboard/default' when isLogin is true
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isLogin]);
  return (
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
              <Route path="about/ceo-message" element={<CeoMessage />} />
              <Route path="about/about" element={<About />} />
              <Route path="/products" element={<Carfilter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cars/:slug" element={<CarDetails />} />
              <Route path="/services" element={<Team />} />
              <Route path="/sign-in" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Render the AppWrapper component
root.render(<AppWrapper />);

// let isLogin = false;
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// //if islogin false
// root.render(
//   <StrictMode>
//     {isLogin ? (
//       <ReduxProvider store={store}>
//         <BrowserRouter basename="/">
//           <App />
//         </BrowserRouter>
//       </ReduxProvider>
//     ) : (
//       <div>
//         <BrowserRouter>
//           <Navigation />
//           <Routes>
//             <Route path="/" element={<Header />} />
//             <Route path="about/ceo-message" element={<CeoMessage />} />
//             <Route path="about/about" element={<About />} />
//             <Route path="/products" element={<Carfilter />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/cars/:slug" element={<CarDetails />} />
//             <Route path="/services" element={<Team />} />
//             <Route path="/sign-in" element={<Login />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )}
//   </StrictMode>
// );
reportWebVitals();
