



import axios from "axios";

const API_BASE = "https://demo.api.duedash.app/v1";

export const fetchCompany = () =>
  axios.get(`${API_BASE}/company/paleo`)
       .then(res => res.data?.Result || res.data || {});

export const fetchCompetitors = () =>
  axios.get(`${API_BASE}/startup/5/market-opportunity/competitors/`)
       .then(res => res.data?.Result || []);

// export const fetchOverview = () =>
//   axios.get(`${API_BASE}/startup/5/dashboard/overview`)
//        .then(res => res.data?.Result || {});

export const fetchOverview = async () => {
  const res = await fetch("https://demo.api.duedash.app/v1/startup/5/dashboard/overview");
  const data = await res.json();
  if (data.ResponseCode === 1 && data.Result) {
    return data.Result;   
  }
  return null;
};


export const fetchFounders = () =>
  axios.get(`${API_BASE}/startup/5/team-advisors/founders`)
       .then(res => res.data?.Result || []);


export const fetchVault = async () => {
  const res = await fetch("https://demo.api.duedash.app/v1/vaults/default/5?isDefault=1&isPublic=1");
  const data = await res.json();
  if (data.ResponseCode === 1 && data.Result?.vaultInfo?.length > 0) {
    return data.Result.vaultInfo[0]; 
  }
  return null;
};
