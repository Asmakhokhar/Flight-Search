import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

export const getToken = async () => {
  const res = await API.post(
    "/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_AMADEUS_CLIENT_ID,
      client_secret: import.meta.env.VITE_AMADEUS_CLIENT_SECRET,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return res.data.access_token;
};

export const searchFlights = async (token, origin, maxPrice) => {
  const res = await API.get(
    `/v1/shopping/flight-destinations`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params: { origin, maxPrice },
    }
  );

  return res.data.data;
};
