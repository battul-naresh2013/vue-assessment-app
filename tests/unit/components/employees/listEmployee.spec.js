/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import listEmployee from '../../../../src/components/employees/listEmployee.vue';

describe('In list-employee Component', () => {
  let listEmployeeWrapper;
  let localVue;
  let mockStore;
  const allEmployees = [{ name: 'testName1' }, { name: 'testName' }];
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: {
        employeeModule: { allEmployees },
      },
      dispatch: jest.fn(),
    };
    listEmployeeWrapper = shallowMount(listEmployee, {
      mocks: {
        $store: mockStore,
      },
      localVue,
    });
  });

  afterEach(() => {
    listEmployeeWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(listEmployeeWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-tab-stub tag="div"';
    expect(listEmployeeWrapper.html()).toContain(expected);
  });

  it('it should have a filter element', () => {
    expect(listEmployeeWrapper.findAll('#filterInput')).toBeDefined();
  });

  it('it should have a <b-pagination-stub element', () => {
    expect(listEmployeeWrapper.contains('b-pagination-stub')).toBe(true);
  });

  it('when "resetInfoModal" called, it should reset form modal values"', () => {
    const infoModal = {
      id: 'info-modal',
      title: 'test Title',
      content: 'test',
    };
    listEmployeeWrapper.vm.infoModal = infoModal;
    listEmployeeWrapper.vm.resetInfoModal();
    expect(listEmployeeWrapper.vm.infoModal.title).toEqual('');
  });
});
