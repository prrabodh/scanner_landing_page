import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import Header from '../components/Header';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // QR value points at the feedback route on localhost dev server.
  // If scanning from a mobile device, replace "localhost" with your machine IP in QR value.
  const qrValue = 'http://localhost:3000/feedback';

  return (
    <div className="landing">
      <Header />
      <main className="container">
        <section className="banner">
          <h1>Greenfield High School</h1>
          <p>Your future begins here — learn, grow, and succeed.</p>
        </section>

        <section className="school-image-section">
          <img
            className="school-image"
            src="https://images.unsplash.com/photo-1596496056006-7b1a12d28f13?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f2d0a3a6f0f8b6b8d2b6c5a4f7b2a6e"
            alt="School building"
          />
        </section>

        <section className="qr-section">
          <h2>Scan to Give Feedback</h2>
          <p>
            Scan this QR code with your phone camera to open the feedback form.
            (Or click the QR to open it on this device.)
          </p>

          <div
            className="qr-wrapper"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/feedback')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate('/feedback');
            }}
          >
            <QRCode value={qrValue} size={180} />
          </div>
          <p className="qr-note">
            Note: If scanning from a different device, replace "localhost" in the QR with your
            machine's local IP (e.g., http://192.168.1.100:3000/feedback) so the device can reach
            your dev server.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Greenfield High School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
