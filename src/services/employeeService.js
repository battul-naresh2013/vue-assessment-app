import apiClient from './apiClient';

const empApiUrl = '/employees';

export const getAllEmployees = () => apiClient.get(empApiUrl);

export const getEmployee = (id) => apiClient.get(`${empApiUrl}/${id}`);

export const postEmployee = (employee) => apiClient.post(empApiUrl, employee);
