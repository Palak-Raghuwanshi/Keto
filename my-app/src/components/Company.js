
import { useEffect, useState } from "react";
import {
  fetchCompany,
  fetchCompetitors,
  fetchOverview,
  fetchFounders,
  fetchVault,
} from "../services/api";
import Header from "./Header";
import Overview from "./Overview";
import Founders from "./Founders";
import Competitors from "./Competitors";
import Vaults from "./Vaults";
import "./Company.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Company() {
  const [company, setCompany] = useState(null);
  const [competitors, setCompetitors] = useState([]);
  const [overview, setOverview] = useState(null);
  const [founders, setFounders] = useState([]);
  const [vault, setVault] = useState(null);
  const [selected, setSelected] = useState("Overview");

  useEffect(() => {
    fetchCompany().then(setCompany);

    fetchCompetitors().then((data) => {
      console.log("Competitors API:", data);
      setCompetitors(data);
    });

    fetchOverview().then((data) => {
      console.log("Overview API (final):", data);
      setOverview(data);
    });

    fetchFounders().then((data) => {
      console.log("Founders API:", data);
      setFounders(data);
    });

    fetchVault().then((data) => {
      console.log("Vault API:", data);
      setVault(data);
    });
  }, []);

  return (
    <div className="flex flex-col">
 
      <Navbar
        items={["Overview", "Founders", "Competitors", "Vault"]}
        onSelect={setSelected}
        company={company}
      />

      <div className="flex-1 p-6">
        <Header company={company} />
        {selected === "Overview" && <Overview overview={overview} />}
        {selected === "Founders" && <Founders founders={founders} />}
        {selected === "Competitors" && (
          <Competitors competitors={competitors} />
        )}
        {selected === "Vault" && <Vaults vault={vault} />}
      </div>
      
      
      <Footer overview={overview} />
      

    </div>
  );
}
