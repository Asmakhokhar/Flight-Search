import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

export const getToken = async () => {
  const res = await API.post(
    "/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_AMADEUS_API_KEY,
      client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return res.data.access_token;
};


// Search flights between two airports using Flight Offers Search
export const searchFlights = async (token, origin, destination, departureDate, returnDate, adults = 1, max = 10) => {
  const params = {
    originLocationCode: origin,
    destinationLocationCode: destination,
    departureDate,
    adults,
    max,
  };
  if (returnDate) params.returnDate = returnDate;
  const res = await API.get(
    `/v2/shopping/flight-offers`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params,
    }
  );
  return res.data.data;
};
