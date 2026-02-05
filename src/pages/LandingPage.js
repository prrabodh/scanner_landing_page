import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import Header from '../components/Header';
import schoolImage from '../images/School_img1.avif';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const qrValue = 'http://localhost:3000/feedback';

  return (
    <div className="landing">
      <Header />
      <main className="container">
        <section
          className="banner"
          style={{ backgroundImage: `url(${schoolImage})` }}
        >
          <div className="banner-content">
            <h1>Greenfield High School</h1>
            <p>Your future begins here — learn, grow, and succeed.</p>
          </div>
          <section className="qr-section" aria-label="QR code to open feedback">
            <div
              className="qr-wrapper"
              role="button"
              tabIndex={0}
              onClick={() => navigate('/feedback')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('/feedback');
              }}
            >
              <QRCode value={qrValue} size={260} />
            </div>
            <p className="qr-note">
              If scanning from another device, replace "localhost" with your machine IP (e.g., http://192.168.1.100:3000/feedback).
            </p>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 Greenfield High School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;