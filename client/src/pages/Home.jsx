// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css'; // Import custom CSS file for animations

function Home() {
  return (
    <div className="home-page container">
      {/* Welcome Section */}
      <header className="text-center my-5">
        <h1 className="display-3 font-weight-bold mb-4 animated fadeInDown">Welcome to LIONEL-BULLS</h1>
        <p className="lead mb-6 animated fadeInUp delay-1s">Your go-to platform for forex content, signals, and tools. Trade smarter, not harder.</p>
      </header>

      {/* Forex Signals Section */}
      <div className="section-header text-center my-5">
        <h2 className="display-4 animated fadeInLeft delay-2s">Forex Signals</h2>
        <p className="lead animated fadeInUp delay-3s">Get accurate, real-time forex signals to make profitable trading decisions.</p>
      </div>

      {/* Forex Signals Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card forex-card animated slideInRight delay-4s">
            <div className="card-body">
              <h3 className="card-title">Real-Time Alerts</h3>
              <p>Receive instant forex signals directly to your device, ensuring you never miss a trading opportunity.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card forex-card animated slideInUp delay-5s">
            <div className="card-body">
              <h3 className="card-title">Risk Management</h3>
              <p>Use our risk management tools to set stop-losses and maximize profitability while minimizing risks.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card forex-card animated slideInLeft delay-6s">
            <div className="card-body">
              <h3 className="card-title">Custom Alerts</h3>
              <p>Set custom alerts for your preferred trading conditions and get notified when your criteria are met.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="section-header text-center my-5">
        <h2 className="display-4 animated fadeInRight delay-7s">Market Analysis</h2>
        <p className="lead animated fadeInUp delay-8s">Analyze market trends and make informed decisions with powerful tools.</p>
      </div>

      {/* Market Analysis Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card analysis-card animated slideInRight delay-9s">
            <div className="card-body">
              <h3 className="card-title">Advanced Charting</h3>
              <p>Use our advanced charting tools to visualize market movements and spot trends early.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card analysis-card animated slideInUp delay-10s">
            <div className="card-body">
              <h3 className="card-title">Sentiment Analysis</h3>
              <p>Understand market sentiment through powerful analysis tools and make informed decisions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card analysis-card animated slideInLeft delay-11s">
            <div className="card-body">
              <h3 className="card-title">News Feeds</h3>
              <p>Stay updated with real-time news feeds that could affect market trends and your trading strategy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center my-5">
        <h2>Get Started Today!</h2>
        <p>Sign up now to access premium forex content and tools.</p>
        <div className="d-flex justify-content-center">
          <Link to="/signup" className="btn btn-primary mx-2">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary mx-2">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
