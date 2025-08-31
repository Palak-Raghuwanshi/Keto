

import React from "react";
import "./Vaults.css";

const getFileType = (fileUrl) => {
  if (!fileUrl) return "other";
  const ext = fileUrl.split(".").pop().toLowerCase();

  switch (ext) {
    case "pdf":
      return "pdf";
    case "doc":
    case "docx":
      return "word";
    case "xls":
    case "xlsx":
      return "excel";
    case "ppt":
    case "pptx":
      return "ppt";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return "image";
    case "zip":
    case "rar":
      return "zip";
    default:
      return "other";
  }
};


const vaultData = {
  name: "Keto data room",
  description: "Default vault shown to DueDash platform investors",
  files: [
    {
      title: "Business model canvas",
      description: "",
      fileUrl: "/files/canvas.pdf",
    },
    {
      title: "Business plan",
      description: "asdasdkn sdkas d askdn kasd",
      fileUrl: "/files/plan.docx",
    },
    {
      title: "211112_Incorporation document",
      description: "",
      fileUrl: "/files/incorp.pdf",
    },
    {
      title: "Software setup",
      description: "",
      fileUrl: "/files/setup.zip",
    },
    {
      title: "NDA for Clients",
      description: "",
      fileUrl: "/files/nda.pdf",
    },
  ],
};

export default function Vaults() {
  const vault = vaultData;

  if (!vault || !vault.files || vault.files.length === 0) {
    return <p className="vault-empty">No vault data available</p>;
  }

  return (
    <div className="vault-container">
      <h1 className="vault-title">{vault.name}</h1>
      <p className="vault-subtitle">{vault.description}</p>

      <div className="vault-grid">
        {vault.files.map((file, idx) => {
          const type = getFileType(file.fileUrl);

          return (
            <div key={idx} className={`vault-card ${type}`}>
              <div className="file-header">
                <div className={`file-icon ${type}`}>
                  {type === "pdf" && "📄"}
                  {type === "word" && "📝"}
                  {type === "excel" && "📊"}
                  {type === "ppt" && "📑"}
                  {type === "image" && "🖼️"}
                  {type === "zip" && "🗂️"}
                  {type === "other" && "📁"}
                </div>
                <h3 className="file-title">{file.title}</h3>
              </div>
              <p className="file-description">
                {file.description || "No description"}
              </p>
              <a
                href={file.fileUrl}
                target="_blank"
                rel="noreferrer"
                className={`file-link ${type}`}
              >
                Open File
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
