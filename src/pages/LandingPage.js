import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import Header from '../components/Header';
import schoolImage from '../images/School_img1.avif';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const qrRef = useRef(null);

  const qrValue = 'http://localhost:3000/feedback';

  // After the QR is rendered, force any background <rect> in the SVG to be transparent.
  useEffect(() => {
    const wrapper = qrRef.current;
    if (!wrapper) return;

    const makeRectsTransparent = () => {
      const svgs = wrapper.querySelectorAll('svg');
      svgs.forEach((svg) => {
        // ensure svg itself has transparent background
        svg.style.background = 'transparent';
        // set any rect (commonly the white background) to transparent
        const rects = svg.querySelectorAll('rect');
        rects.forEach((r) => {
          try {
            r.setAttribute('fill', 'transparent');
            r.style.fill = 'transparent';
          } catch (err) {
            // ignore any read-only attributes
          }
        });
      });
    };

    // Run once immediately (QR is usually already rendered), and also after a small delay
    // to handle async renders in some environments.
    makeRectsTransparent();
    const t = setTimeout(makeRectsTransparent, 120);
    return () => clearTimeout(t);
  }, [qrValue]);

  return (
    <div className="landing">
      <Header />

      <main className="container">
        <section
          className="banner"
          style={{ backgroundImage: `url(${schoolImage})` }}
        >
          <section className="qr-section" aria-label="QR code to open feedback">
            <div
              className="qr-wrapper"
              role="button"
              tabIndex={0}
              // onClick={() => navigate('/feedback')}
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter') navigate('/feedback');
              // }}
            >
              <QRCode value={qrValue} size={260} />
            </div>
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