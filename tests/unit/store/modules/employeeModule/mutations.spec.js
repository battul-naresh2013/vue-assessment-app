import mutations from '../../../../../src/store/modules/employeeModule/mutations';

describe('In mutations', () => {
  it('SET_EMPLOYEE sets state.employee to employee', () => {
    const employee = { name: 'testName' };
    const state = {
      employee: {},
    };
    mutations.SET_EMPLOYEE(state, employee);
    expect(state.employee).toBe(employee);
  });

  it('SET_ALL_EMPLOYEES sets state.allEmployees to allEmployees', () => {
    const allEmployees = [{ name: 'testName1' }, { name: 'testName' }];
    const state = {
      allEmployees: {},
    };
    mutations.SET_ALL_EMPLOYEES(state, allEmployees);
    expect(state.allEmployees).toBe(allEmployees);
  });

  it('ADD_EMPLOYEE adds and employee to state.allEmployees', () => {
    const employee = { name: 'newTestName' };
    const state = {
      allEmployees: [{ name: 'testName1' }, { name: 'testName' }],
    };
    mutations.ADD_EMPLOYEE(state, employee);
    const expectedEmployee = state.allEmployees.find((emp) => emp.name === employee.name);
    expect(expectedEmployee).toBe(employee);
  });
});
