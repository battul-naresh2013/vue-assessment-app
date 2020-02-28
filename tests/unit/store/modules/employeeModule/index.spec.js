import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import * as employeeModule from '../../../../../src/store/modules/employeeModule';
import { getAllEmployees } from '../../../../../src/services/employeeService';

// Mock module with Jest mock functions
jest.mock('../../../../../src/services/employeeService');

// create local vue instance
const localVue = createLocalVue();
localVue.use(Vuex);
describe('In store', () => {
  it('returns first 20 dummy items', async () => {
    const items = Array(20)
      .fill()
      .map((v, i) => i);

    // Control mock to resolve with an array
    getAllEmployees.mockResolvedValue(items);

    // create store instance
    const store = new Vuex.Store({
      modules: { employeeModule },
      state: {},
    });

    await store.dispatch('employeeModule/getAllEmployeesAction');
    expect(store.state.employeeModule.allEmployees).toEqual(items);
  });
});
