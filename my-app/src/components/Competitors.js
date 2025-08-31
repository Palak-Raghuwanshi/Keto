

import React from "react";
import "./Competitors.css";

const Competitors = ({ competitors = [] }) => {
  return (
    <div className="competitor-container">
      {competitors.map((c) => (
        <div key={c.id} className="competitor-card">



        
          <h3>{c.name}</h3>

       
          <div className="competitor-info">
            <p><strong>Sector 📊:</strong> {c.sector || "N/A"}</p>
            <p><strong>Specialization 🎯:</strong> {c.specialization || "N/A"}</p>
            {c.businessModels?.length > 0 && (
              <p><strong>Business Model 💼:</strong> {c.businessModels.join(", ")}</p>
            )}
          </div>

          <hr />

         
          <h4>Differentiators:</h4>
          {c.differentiators?.length > 0 ? (
            <ul>
              {c.differentiators.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          ) : (
            <p>No differentiators listed.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Competitors;

