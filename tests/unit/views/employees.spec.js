import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import employees from '../../../src/views/employees.vue';

import addEmployee from '../../../src/components/employees/addEmployee.vue';
import listEmployee from '../../../src/components/employees/listEmployee.vue';

describe('In Employees View', () => {
  let empWrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    empWrapper = shallowMount(employees, {
      localVue,
    });
  });

  afterEach(() => {
    empWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(empWrapper.isVueInstance).toBeTruthy();
  });

  describe('it should load addEmployee component', () => {
    it('it should load the addEmployee', () => {
      expect(addEmployee).toBeTruthy();
    });

    it('it should have a <add-employee-stub></add-employee-stub>', () => {
      expect(empWrapper.html()).toContain('<add-employee-stub></add-employee-stub>');
    });
  });

  describe('it should load listEmployee component', () => {
    it('it should load the listEmployee', () => {
      expect(listEmployee).toBeTruthy();
    });

    it('it should have a <list-employee-stub></list-employee-stub>', () => {
      expect(empWrapper.html()).toContain('<list-employee-stub></list-employee-stub>');
    });
  });
});
