const mutations = {
  SET_ALL_EMPLOYEES(state, allEmployees) {
    state.allEmployees = allEmployees;
  },
  SET_EMPLOYEE(state, employee) {
    state.employee = employee;
  },
  ADD_EMPLOYEE(state, employee) {
    state.allEmployees.push(employee);
  },
};

export default mutations;
