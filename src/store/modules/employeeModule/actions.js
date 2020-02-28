/* eslint-disable import/prefer-default-export */
import { actionTypes } from '../../../shared/appConstants';
import { getAllEmployees, getEmployee, postEmployee } from '../../../services/employeeService';
import handleErrors from '../handleErrors';

export const actions = {
  async getAllEmployeesAction({ commit, dispatch }) {
    return getAllEmployees()
      .then((allEmployees) => commit('SET_ALL_EMPLOYEES', allEmployees))
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting all employees: ${error.message}`,
        };
        handleErrors(actionTypes.addNotification, notification, dispatch);
      });
  },

  async postEmployeeAction({ commit, dispatch }, employee) {
    return postEmployee(employee)
      .then(() => {
        commit('ADD_EMPLOYEE', employee);
        commit('SET_EMPLOYEE', employee);
        const notification = {
          type: 'success',
          message: 'An employee has been Added!',
        };
        dispatch(actionTypes.addNotification, notification, { root: true });
      })
      . catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem creating an employee: ${error.message}`,
        };
        handleErrors(actionTypes.addNotification, notification, dispatch);
      });
  },

  async getEmployeeAction({ commit, dispatch }, employeeId) {
    return getEmployee(employeeId)
      .then((employee) => {
        commit('SET_EMPLOYEE', employee);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting an employee: ${error.message}`,
        };
        handleErrors(actionTypes.addNotification, notification, dispatch);
      });
  },
};
