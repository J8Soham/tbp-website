import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-content">
      {/* Main layout grid */}
      <div className="main-content">
        {/* Left Column - Welcome Text */}
        <div className="left-column">
          <p>
            Welcome to the <strong>University of California, Santa Cruz (UCSC)</strong> Baskin School of Engineering (BSOE) chapter of <strong>Tau Beta Pi</strong>.
          </p>
          <p>
            We assist the University of California, Santa Cruz, School of Engineering academic community by promoting excitement, fostering cooperation, and communicating an understanding of the principles associated with proper engineering practices.
          </p>
          <p>
            <strong>Tau Beta Pi</strong>, the Engineering Honor Society, was established in 1885 and has initiated over 500,000 members. Our California Alpha Delta Chapter was installed on March 8, 2008. The Summer 2008 issue of The Bent includes <a href="#" onClick={(e) => e.preventDefault()}>an article about our installation</a>. We invite students of exemplary character and academic achievement to join Tau Beta Pi twice a year, including Juniors in the top eighth and Seniors in the top fifth of the engineering class.
          </p>
        </div>

        {/* Right Column - Image & Caption */}
        <div className="right-column">
          <div className="image-placeholder">
            <span>[IMAGE PLACEHOLDER]</span>
          </div>
          <p className="image-caption">
            Some project that we have lol.
          </p>
        </div>
      </div>

      {/* Bottom Section - Wide Image */}
      <div className="bottom-section">
        <div className="wide-image-placeholder">
          <span>[IMAGE PLACEHOLDER: MEMBERS GROUP PHOTO]</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
