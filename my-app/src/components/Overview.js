
import React from "react";
import "./Overview.css"; 
const Overview = ({ overview }) => {
  if (!overview) {
    return <p>No overview data available.</p>;
  }
//   if (!overview || Object.keys(overview).length === 0) {
//   return <p>No overview data available.</p>;
// }


  return (
    <div className="overview-container">
     
      {overview.companyBanner && (
        // <img
        //   src={`https://demo.api.duedash.app/${overview.companyBanner}`}
        //   alt="Company Banner"
        //   className="overview-banner"
        // />
          <img
    src="/banner.jpg"
    alt={overview.companyBanner}
    className="overview-banner"
  />
      )}

      <div className="overview-header">
        {/* {overview.companyLogo && (
          <img
            src={`https://demo.api.duedash.app/${overview.companyLogo}`}
            alt={overview.companyName}
            className="overview-logo"
          /> */}
          {overview.companyLogo && (
  <img
    src="/logo.jpg"
    alt={overview.companyName}
    className="overview-logo"
  />
        )}


       
{/* <div className="overview-header">
  <img
    src="/logo.jpg"   
    alt={overview.companyName}
    className="overview-logo"
  />
</div> */}







        <div>
          <h1 className="overview-title">{overview.companyName}</h1>
          <p className="overview-tagline">{overview.tagline}</p>
        </div>
      </div>



     
      <div className="overview-section">
        <h2 className="section-title">Elevator Pitch</h2>
        <p>{overview.elevatorPitch}</p>
      </div>

      <div className="overview-section">
        <h2 className="section-title"> 🚨Problem</h2>
        <p>{overview.problem}</p>
      </div>

      <div className="overview-section">
        <h2 className="section-title"> 🛠️ Product</h2>
        <p>{overview.productDesc}</p>
      </div>

   
      <div className="overview-section">
        <h2 className="section-title"> 💼 Business Models</h2>
        <ul>
          {overview.businessModelList?.map((bm) => (
            <li key={bm.businessModelId}>{bm.businessModel.name}</li>
          ))}
        </ul>
      </div>

    
      <div className="overview-section">
        <h2 className="section-title"> 💰 Revenue Streams</h2>
        <ul>
          {overview.revenueStreamsList?.map((rs) => (
            <li key={rs.revenueStreamId}>{rs.revenueStream.name}</li>
          ))}
        </ul>
      </div>

   
      <div className="overview-section">
        <h2 className="section-title"> 🌐 Connect</h2>
        <div className="overview-socials">
          {overview.websiteUrl && (
            <a href={overview.websiteUrl} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          {overview.linkedin && (
            <a href={overview.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {overview.twitter && (
            <a href={overview.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {overview.instagram && (
            <a href={overview.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
