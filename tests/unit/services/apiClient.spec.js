import axios from 'axios';
import apiClient from '../../../src/services/apiClient';

// Mock module with Jest mock functions
jest.mock('../../../src/services/apiClient');

describe('In apiClient', () => {
  const baseURL = 'http://localhost:3000';

  it('apiClient to be defined', () => {
    expect(apiClient).toBeDefined();
  });

  it('axios.create sets the baseUrl', () => {
    const expected = axios.create({
      baseURL,
    });
    expect(apiClient.baseURL).toEqual(expected.baseURL);
  });
});
