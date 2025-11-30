import React from 'react';
import './App.css';
import './styles/Home.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function GlobalNetworkEffect() {
  return (
    <div className="global-network-effect">
      {/* Coding icons */}
      <svg className="network-icon color-1" style={{left: '15%', top: '20%', animationDelay: '0s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <svg className="network-icon color-2" style={{left: '75%', top: '25%', animationDelay: '0.5s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M21 15.5c-1.5-2-4-2-5.5-1"></path>
      </svg>
      <svg className="network-icon color-3" style={{left: '25%', top: '70%', animationDelay: '1s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
      <svg className="network-icon color-4" style={{left: '70%', top: '65%', animationDelay: '1.5s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="M21 12h-6m-6 0H3"></path>
      </svg>
      <svg className="network-icon color-5" style={{left: '45%', top: '15%', animationDelay: '2s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 19c-5 0-8-3-8-6 0-3 3-6 8-6h11l-3-3m0 6l3-3"></path>
      </svg>
      <svg className="network-icon color-6" style={{left: '85%', top: '45%', animationDelay: '2.5s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
      </svg>
      
      {/* Additional design icons */}
      <svg className="network-icon color-7" style={{left: '35%', top: '35%', animationDelay: '0.3s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
      <svg className="network-icon color-8" style={{left: '55%', top: '55%', animationDelay: '0.8s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
      <svg className="network-icon color-1" style={{left: '20%', top: '45%', animationDelay: '1.3s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <line x1="9" y1="9" x2="15" y2="15"></line>
        <line x1="15" y1="9" x2="9" y2="15"></line>
      </svg>
      <svg className="network-icon color-2" style={{left: '65%', top: '30%', animationDelay: '1.8s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10,8 16,12 10,16 10,8"></polygon>
      </svg>
      <svg className="network-icon color-3" style={{left: '40%', top: '75%', animationDelay: '2.3s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10,9 9,9 8,9"></polyline>
      </svg>
      <svg className="network-icon color-4" style={{left: '80%', top: '15%', animationDelay: '2.8s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path>
        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"></path>
      </svg>
      
      {/* Connecting lines */}
      <div className="network-line" style={{left: '15%', top: '20%', width: '200px', transform: 'rotate(25deg)', animationDelay: '0.2s'}}></div>
      <div className="network-line" style={{left: '45%', top: '35%', width: '180px', transform: 'rotate(-15deg)', animationDelay: '0.8s'}}></div>
      <div className="network-line" style={{left: '25%', top: '50%', width: '220px', transform: 'rotate(45deg)', animationDelay: '1.2s'}}></div>
      <div className="network-line" style={{left: '60%', top: '40%', width: '160px', transform: 'rotate(-35deg)', animationDelay: '1.8s'}}></div>
      <div className="network-line" style={{left: '35%', top: '25%', width: '140px', transform: 'rotate(60deg)', animationDelay: '0.6s'}}></div>
      <div className="network-line" style={{left: '50%', top: '60%', width: '190px', transform: 'rotate(-50deg)', animationDelay: '1.4s'}}></div>
      <div className="network-line" style={{left: '20%', top: '65%', width: '170px', transform: 'rotate(15deg)', animationDelay: '2.1s'}}></div>
      <div className="network-line" style={{left: '70%', top: '20%', width: '130px', transform: 'rotate(-25deg)', animationDelay: '2.6s'}}></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Global network effect covering entire website */}
      <GlobalNetworkEffect />
      {/* decorative blobs (site background) */}
      <div className="blob blob-left" aria-hidden />
      <div className="blob blob-mid-left" aria-hidden />
      <div className="blob blob-mid-right" aria-hidden />
      <div className="blob blob-right" aria-hidden />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;