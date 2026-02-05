import React, { useState } from 'react';
import Header from '../components/Header';
import './FeedbackPage.css';

const FeedbackPage = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please enter feedback before submitting.');
      return;
    }

    // store feedback locally for now
    try {
      const existing = JSON.parse(localStorage.getItem('school_feedbacks') || '[]');
      existing.push({ text: text.trim(), date: new Date().toISOString() });
      localStorage.setItem('school_feedbacks', JSON.stringify(existing));
      setSubmitted(true);
      setText('');
    } catch (err) {
      console.error(err);
      alert('Could not save feedback locally.');
    }
  };

  return (
    <div className="feedback-page">
      <Header />
      <main className="container">
        <section className="feedback-card">
          <h2>Feedback Form</h2>
          {!submitted && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="feedback">Your feedback</label>
              <textarea
                id="feedback"
                rows="8"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Please share your thoughts about our school..."
              />
              <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
          )}

          {submitted && (
            <div className="thanks">
              <h3>Thank you!</h3>
              <p>Your feedback has been recorded. We appreciate your input.</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                Submit another
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default FeedbackPage;
