import { actions } from '../../../../../src/store/modules/employeeModule/actions';
// Import intercepted by Jest to return mock getAllEmployees function
import { getAllEmployees, getEmployee, postEmployee } from '../../../../../src/services/employeeService';
import handleErrors from '../../../../../src/store/modules/handleErrors';

// Mock module with Jest mock functions
jest.mock('../../../../../src/services/employeeService');
jest.mock('../../../../../src/store/modules/handleErrors');

describe('In actions, ', () => {
  let commit;
  let dispatch;
  let error;

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    error = new Error({ message: 'Async error' });
    handleErrors.mockImplementation(() => ({
      handleErrors: () => {
        throw new Error('Test error');
      },
    }));
  });

  it('getAllEmployeesAction should commits all employees data returned by getAllEmployees Api method', async () => {
    const allEmployees = [1, 2, 3];
    // Control mock to resolve with an array
    getAllEmployees.mockResolvedValue(allEmployees);
    await actions.getAllEmployeesAction({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith('SET_ALL_EMPLOYEES', allEmployees);
  });

  it('getAllEmployeesAction should cacth en error when getAllEmployees Api throws error', async () => {
    getAllEmployees.mockRejectedValue(error);
    await actions.getAllEmployeesAction({ commit, dispatch });
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('getEmployeeAction should commits an employee data returned by getEmployee Api method', async () => {
    const employee = { name: 'testName', id: 1 };
    getEmployee.mockResolvedValue(employee);
    await actions.getEmployeeAction({ commit, dispatch }, employee.id);
    expect(commit).toHaveBeenCalledWith('SET_EMPLOYEE', employee);
  });

  it('getEmployeeAction should cacth en error when getEmployee Api throws error', async () => {
    const employeeId = 1;
    getEmployee.mockRejectedValue(error);
    await actions.getEmployeeAction({ commit, dispatch }, employeeId);
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('postEmployeeAction should commits an employee data passed to postEmployee Api method', async () => {
    const employee = { name: 'testName' };
    postEmployee.mockResolvedValue(employee);
    await actions.postEmployeeAction({ commit, dispatch }, employee);
    expect(commit).toHaveBeenCalledWith('SET_EMPLOYEE', employee);
  });

  it('postEmployeeAction should cacth en error when postEmployee Api throws error', async () => {
    const employee = { name: 'testName' };
    postEmployee.mockRejectedValue(error);
    await actions.postEmployeeAction({ commit, dispatch }, employee);
    expect(() => handleErrors.handleErrors()).toThrow();
  });
});

/* NOT RECOMMENDED WAY */
// Testing with a real store and mock mutation

// import Vue from 'vue';
// import Vuex from 'vuex';
// import { actions } from '../../../../../src/store/modules/employeeModule/actions';

// Vue.use(Vuex);
// describe('In actions', () => {
//   let store;
//   let setMockAllEmployeesData;
//   beforeEach(() => {
//     setMockAllEmployeesData = jest.fn();
//     store = new Vuex.Store({
//       state: { allEmployees: {} },
//       mutations: {
//         SET_ALL_EMPLOYEES: setMockAllEmployeesData,
//       },
//       actions: {
//         getAllEmployees: actions.getAllEmployees,
//       },
//     });
//   });
//   it('tests using a mock mutation but real store', () => {
//     store.hotUpdate({
//       mutations: { SET_ALL_EMPLOYEES: setMockAllEmployeesData },
//     });
//     return store.dispatch('getAllEmployees')
//       .then(() => {
//         expect(setMockAllEmployeesData.mock.calls[0][1])
//           .toEqual({ title: 'Mock with Jest' });
//         expect(setMockAllEmployeesData.mock.calls).toHaveLength(1);
//       });
//   });
// });

// import { actions } from '../../../../../src/store/modules/employeeModule/actions';

// describe('In actions, ', () => {
//   it('have been called with a mock commit', () => {
//     let count = 0;
//     let allEmployees;
//     const mockCommit = (state, payload) => {
//       allEmployees = payload;
//       count += 1;
//     };
//     actions.getAllEmployees({ commit: mockCommit })
//       .then(() => {
//         expect(count).toBe(1);
//         console.log('allEmployees===', allEmployees);

//         expect(allEmployees).toEqual({ title: 'Mock with Jest' });
//       });
//   });

//   it('should go to catch block', () => {
//     actions.getAllEmployees = jest.fn(() => Promise.reject(new Error()));
//     // store = new Vuex.Store({ actions })
//     // const wrapper = shallowMount(Actions, {
//     //     store,
//     //     localVue
//     // })
//   });
// });
