// Import intercepted by Jest to return mock getAllEmployees function
import { getAllEmployees, getEmployee, postEmployee } from '../../../src/services/employeeService';
import apiClient from '../../../src/services/apiClient';

// Mock module with Jest mock functions
jest.mock('../../../src/services/apiClient');

describe('In Employee service, ', () => {
  it('getAllEmployees api should call', () => {
    const allEmployees = [1, 2, 3];
    apiClient.get.mockResolvedValue(allEmployees);
    getAllEmployees().then(((result) => {
      expect(result).toEqual(allEmployees);
    }));
  });

  it('getEmployee api should call', () => {
    const employee = { name: 'testName', id: 1 };
    apiClient.get.mockResolvedValue(employee);
    getEmployee().then(((result) => {
      expect(result).toEqual(employee);
    }));
  });

  it('postEmployee api should call', () => {
    const employee = { name: 'testName', id: 1 };
    apiClient.post.mockResolvedValue(employee);
    postEmployee().then(((result) => {
      expect(result).toEqual(employee);
    }));
  });
});
