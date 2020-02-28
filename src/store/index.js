import Vue from 'vue';
import Vuex from 'vuex';
import { teams, skills } from '../shared/appConstants';
import * as employeeModule from './modules/employeeModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { employeeModule },
  state: {
    teams,
    skills,
  },
});
