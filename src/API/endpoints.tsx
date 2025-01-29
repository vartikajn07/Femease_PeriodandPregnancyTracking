
export const BASE_URL = 'https://period-pregnancy-tracker-app.onrender.com/'

export const endpoints = {
  // Auth endpoints
  REGISTER: `${BASE_URL}api/auth/register`,
  LOGIN: `${BASE_URL}api/auth/login`,
  PERIODONBOARDING: `${BASE_URL}api/userOption/periodTracker/`, //adding user to period tracker db -> creates a tracker Id
  PERIODSTARTDATE: `${BASE_URL}api/period/start`, //period start date
  PERIODLENGTHDAYS: `${BASE_URL}api/period/length`, //period length
  CYCLEINSIGHTS: `${BASE_URL}api/period/insights`

  // Add more endpoints here
};

export default endpoints;