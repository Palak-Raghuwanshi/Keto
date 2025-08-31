
// // import axios from "axios";

// // const API_BASE_URL = "https://demo.api.duedash.app/v1"; // replace with your real API base

// // // Vaults API
// // export const getVaults = () => axios.get(`${API_BASE_URL}/vaults`);

// // // Founders API
// // export const getFounders = () => axios.get(`${API_BASE_URL}/founders`);

// // // Competitors API
// // export const getCompetitors = () => axios.get(`${API_BASE_URL}/competitors`);

// // // Company API
// // export const getCompany = () => axios.get(`${API_BASE_URL}/company`);

// // // Overview API
// // export const getOverview = () => axios.get(`${API_BASE_URL}/overview`);

// import axios from "axios";

// const API_BASE = "https://demo.api.duedash.app/v1";

// export const fetchCompany = () =>
//   axios.get(`${API_BASE}/company/paleo`).then(res => res.data);

// // export const fetchCompetitors = () =>
// //   axios.get(`${API_BASE}/startup/5/market-opportunity/competitors/`).then(res => res.data);
// export const fetchCompetitors = () =>
//   axios
//     .get(`${API_BASE}/startup/5/market-opportunity/competitors/`)
//     .then(res => res.data?.Result || []);  // 🔑 normalize to array

// export const fetchOverview = () =>
//   axios.get(`${API_BASE}/startup/5/dashboard/overview`).then(res => res.data);

// // export const fetchFounders = () =>
// //   axios.get(`${API_BASE}/startup/5/team-advisors/founders`).then(res => res.data);
// export const fetchFounders = () =>
//   axios
//     .get(`${API_BASE}/startup/5/team-advisors/founders`)
//     .then(res => res.data?.Result || []);  // 🔑 always return array


// export const fetchVault = () =>
//   axios.get(`${API_BASE}/vaults/default/5?isDefault=1&isPublic=1`).then(res => res.data);



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
    return data.Result;   // ✅ only return the Result object
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
    return data.Result.vaultInfo[0]; // return the vault object
  }
  return null;
};
