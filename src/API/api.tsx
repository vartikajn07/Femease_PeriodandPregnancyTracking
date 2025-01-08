import axios, { AxiosRequestConfig } from 'axios';
import endpoints, { BASE_URL } from './endpoints';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
});

interface ApiParams {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

const apiCall = async ({ endpoint, method, body, headers }: ApiParams) => {
  const config: AxiosRequestConfig = {
    url: endpoint,
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Add this line
      ...headers,
    },
    data: body,
  };
  console.log('API Call Config:', config);

  try {
    const response = await instance.request(config);
    return response.data;
  } catch (error: any) {
    console.log('error', error)
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('API response error:', error.response.data);
      throw new Error(error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('API no response error:', error);
      console.error('Request details:', error.config);
      throw new Error('No response from server.');
    } else {
      // Something else happened
      console.error('API request error:', error.message);
      throw new Error(error.message);
    }
  }
};

export default apiCall;


export const registerUserApi = async (userData: Record<string, any>) => {
  return await apiCall({
    endpoint: endpoints.REGISTER,
    method: 'POST',
    body: userData,
  });
};

export const loginApi = async (userData: Record<string, any>) => {
  return await apiCall({
    endpoint: endpoints.LOGIN,
    method: 'POST',
    body: userData
  })
}
//adding user to period tracker db -> creates userId
export const periodOnboardingApi = async (token: string) => {
  if (!token) {
    throw new Error('Authentication token is required.');
  }
  return await apiCall({
    endpoint: endpoints.PERIODONBOARDING,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

//logging last period date
export const periodstartApi = async (token: string, data: { date: string }) => {
  if (!token) {
    throw new Error('Authentication token is required.')
  }
  return await apiCall({
    endpoint: endpoints.PERIODSTARTDATE,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  })
}