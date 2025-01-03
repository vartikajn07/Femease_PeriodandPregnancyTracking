
export const BASE_URL = 'https://period-pregnancy-tracker-app.onrender.com/'

export const endpoints = {
  // Auth endpoints
  REGISTER: `${BASE_URL}api/auth/register`,
  LOGIN: `${BASE_URL}api/auth/login`,
  PERIODONBOARDING: `${BASE_URL}api/userOption/periodTracker/` //adding user to period tracker db -> creates a tracker Id



  // Add more endpoints here
};

export default endpoints;