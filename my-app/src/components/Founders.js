

import React from "react";
import "./Founders.css";


export default function Founders({ founders }) {
  if (!Array.isArray(founders) || founders.length === 0) {
    return <p className="p-4 text-gray-500">No founders data available</p>;
  }

  return (
    <div className="founders-container">
      <h2 className="founders-title">Meet Our Founders</h2>
      <div className="founders-cards">
        {founders.map(f => (
          <div key={f.id} className="founder-card">
            <div className="founder-image-container">
              {/* <img
                src={`https://demo.api.duedash.app/${f.profileImage}`}
                alt={f.fullName}
                className="founder-image"
              /> */}

                <img
    src="/profile.jpg"
    alt={f.fullName}
    className="founder-image"
  />




            </div>
            <div className="founder-info">
              <h3 className="founder-name">{f.fullName}</h3>
              <p className="founder-position">{f.position}</p>
              <p className="founder-description">{f.description}</p>
              <div className="social-links">
                {f.linkedin && (
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                )}
                {f.twitter &&  (
                  <a href={f.twitter} target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


