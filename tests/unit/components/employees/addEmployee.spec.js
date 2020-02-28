/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import addEmployee from '../../../../src/components/employees/addEmployee.vue';
import { teams, skills } from '../../../../src/shared/appConstants';
// import { actions } from '../../../../src/store/modules/employeeModule/actions';
// jest.mock('../../../../src/store/modules/employeeModule/actions');
describe('In add-employee Component', () => {
  let addEmployeeWrapper;
  let localVue;
  let mockStore;
  let event;
  let spyEvent;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: {
        skills,
        teams,
      },
      dispatch: jest.fn(),
    };
    addEmployeeWrapper = shallowMount(addEmployee, {
      mocks: {
        $store: mockStore,
      },
      localVue,
    });
    event = { preventDefault: () => {} };
    spyEvent = jest.spyOn(event, 'preventDefault');
  });

  it('it renders the correct markup', () => {
    const expected = '<b-tab-stub active="true" tag="div"';
    expect(addEmployeeWrapper.html()).toContain(expected);
  });

  it('it should have a <b-tab-stub> element', () => {
    expect(addEmployeeWrapper.contains('b-tab-stub')).toBe(true);
  });

  it('renders a input type email tag', () => {
    expect(addEmployeeWrapper.find('[type="email"]')).toBeTruthy();
  });

  it('It should have skills dropdown list', () => {
    expect(addEmployeeWrapper.findAll('b-form-select-stub').length).toBe(1);
  });

  it('It should have teams checkboxes list', () => {
    expect(addEmployeeWrapper.findAll('b-form-checkbox-group-stub').length).toBe(1);
  });

  it('It should have teams of length as provide teams length', () => {
    expect(addEmployeeWrapper.findAll('b-form-checkbox-stub')).toHaveLength(teams.length);
  });

  it('It should have a button of type submit', () => {
    expect(addEmployeeWrapper.findAll('[type="submit"]').length).toBe(1);
  });

  it('It should have a button of variant danger', () => {
    expect(addEmployeeWrapper.findAll('[variant="danger"]').length).toBe(1);
  });

  it('when onReset function calls, it should call resetForm', () => {
    const spyResetFrom = jest.spyOn(addEmployeeWrapper.vm, 'resetFrom');
    addEmployeeWrapper.vm.onReset(event);
    expect(spyResetFrom).toBeCalled();
    expect(spyEvent).toBeCalled();
  });

  it('when "resetFrom" called, it should reset form values"', async () => {
    const form = {
      email: 'a@a.com',
      name: 'fff',
      skill: 'frontend',
      teams: ['test'],
    };
    addEmployeeWrapper.vm.form = form;
    addEmployeeWrapper.vm.resetFrom();
    expect(addEmployeeWrapper.vm.form.email).toEqual('');
  });

  it('when onSubmit function calls, it should call addEmployee with form data', () => {
    const form = {
      email: '',
      name: '',
      skill: null,
      teams: [],
    };
    addEmployeeWrapper.vm.addEmployee = jest.fn();
    addEmployeeWrapper.vm.onSubmit(event);
    expect(spyEvent).toBeCalled();
    expect(addEmployeeWrapper.vm.addEmployee).toBeCalledWith(form);
  });

  // #region
  // it('It should call "addEmployee" when all inputs are valid"', async () => {
  //   const form = {
  //     email: 'a@a.com',
  //     name: 'fff',
  //     skill: 'frontend',
  //     teams: ['test'],
  //   };
  //   jest.mock('../../../../src/store/modules/employeeModule/actions', () => ({
  //     actions: {
  //       postEmployeeAction: jest.fn(() => Promise.resolve({
  //         email: 'a@a.com',
  //         name: 'fff',
  //         skill: 'frontend',
  //         teams: ['test'],
  //       })),
  //     },
  //   }));

  //   addEmployeeWrapper.vm.resetFrom = jest.fn();
  //   // Control mock to resolve with an array
  //   actions.postEmployeeAction.mockResolvedValue(form);
  //   addEmployeeWrapper.vm.addEmployee = jest.fn();
  //   addEmployeeWrapper.vm.addEmployee.mockResolvedValue(form);
  //   const result = await addEmployeeWrapper.vm.addEmployee();

  //   expect(result).toEqual(form);
  //   // const spy = jest.spyOn(addEmployeeWrapper.vm, 'resetFrom');
  //   // setTimeout(() => {
  //   //   addEmployeeWrapper.vm.addEmployee();

  //   //   // addEmployeeWrapper.vm.$store.dispatch('employeeModule/postEmployeeAction', form);
  //   //   expect(addEmployeeWrapper.vm.resetFrom).toHaveBeenCalled();
  //   // }, 1000);
  //   // expect(spy).toHaveBeenCalled();
  //   // expect(addEmployeeWrapper.vm.resetFrom).toHaveBeenCalled();
  // });

  // describe('In app-header Component', () => {
  //   let store;
  //   let empActions;
  //   let wrapper;
  //   beforeEach(() => {
  //     empActions = {
  //       actions: { postEmployeeAction: jest.fn() },
  //     };
  //     store = new Vuex.Store({
  //       empActions,
  //     });
  //     wrapper = shallowMount(addEmployee, {
  //       store,
  //       localVue,
  //     });
  //   });

  //   it('dispatches an action postEmployeeAction when submit button triggers', async () => {
  //     const event = { preventDefault: () => {} };
  //     const spy = jest.spyOn(wrapper.vm, 'onSubmit');
  //     wrapper.find('[type="submit"]').trigger('click');
  //     setTimeout(() => {
  //       expect(empActions.actions.postEmployeeAction.mock.calls).toHaveLength(1);
  //       expect(empActions.actions.postEmployeeAction.mock.calls[0][1]).toEqual({ val: 1 });
  //       expect(event.preventDefault).toBeCalled();
  //       expect(spy).toHaveBeenCalled();
  //     }, 1000);
  //   });

  //   it('when addEmployee method calls, then it should dispatch postEmployeeAction action ', () => {
  //     empActions.actions.postEmployeeAction.mockResolvedValue({ test: 'test' });
  //     wrapper.vm.addEmployee();
  //     expect(empActions.actions.postEmployeeAction.mock.calls).toHaveLength(1);
  //   });
  // });


  // describe('When submit button triggers', () => {
  //   const event = { preventDefault: () => {} };
  //   it('then it should call onSubmit method', () => {

  //     const store = new Vuex.Store();
  //     const wrapper = shallowMount(addEmployee, {
  //       // mocks: {
  //       //   axios
  //       // }
  //       localVue,
  //       store,
  //     });
  //     wrapper.vm.form = {
  //       email: 'a@a.com',
  //       name: 'fff',
  //       skill: 'frontend',
  //       teams: ['test'],
  //     };
  //     wrapper.vm.addEmployee = jest.fn();

  //     // const input = wrapper.find('[type="email"]');
  //     // input.setValue('email@gmail.com');
  //     wrapper.find('[type="submit"]').trigger('submit');
  //     expect(wrapper.vm.addEmployee).toHaveBeenCalled();
  //   });


  // it('then it should call onSubmit method', () => {
  //   jest.spyOn(event, 'preventDefault');
  //   // addEmployeeWrapper.vm.onSubmit = jest.fn();
  //   const submitButton = addEmployeeWrapper.find('[type="submit"]');
  //   submitButton.trigger('click', event);
  //   // expect(event.preventDefault).toBeCalled();
  //   // expect(addEmployeeWrapper.vm.onSubmit).toBeCalled();
  // });

  // it('then it should call addEmployee method.', () => {
  //   addEmployeeWrapper.vm.onSubmit(event);
  //   addEmployeeWrapper.vm.addEmployee.mockImplementation(() => ({
  //     addEmployee: () => true,
  //   }));
  //   expect(jest.spyOn(addEmployeeWrapper.vm, 'addEmployee').toBeCalled());
  // });
  // });

  // it('It should call "addEmployee" when all inputs are valid"', () => {
  //   // jest.mock('../../../../src/store/modules/employeeModule/actions');
  //   // jest.mock('store.dispatch("employeeModule/postEmployeeAction"');
  //   const event = { preventDefault: () => {} };
  //   jest.spyOn(event, 'preventDefault');
  //   // const payLoad = {
  //   //   id: 1,
  //   //   name: 'Sushma',
  //   //   teams: [],
  //   //   email: 'a@a.com',
  //   //   skills: [],
  //   // };
  //   const store = new Vuex.Store();
  //   // store.dispatch('employeeModule/postEmployeeAction', payLoad).mockResolvedValue(payLoad);

  //   const wrapper = shallowMount(addEmployee, {
  //     localVue,
  //     store,
  //   });
  //   wrapper.vm.onSubmit = jest.fn();
  //   console.log('wrapper.find("[type="submit"]"', wrapper.find('[type="submit"]'));

  //   wrapper.find('[type="submit"]').trigger('submit');
  //   // expect(wrapper.vm.onSubmit).toBeCalled();
  //   // expect(event.preventDefault).toBeCalled();
  //   // wrapper.find("form").trigger("submit.prevent")
  //   wrapper.vm.$nextTick();
  //   // wrapper.find('[type="submit"]').trigger('submit');
  //   // console.log('wrapper.vm.onSubmit=====', wrapper.vm.onSubmit);
  //   // const spy = jest.spyOn(wrapper.vm, 'onSubmit');
  //   // const spyAddEmployee = jest.spyOn(wrapper.vm, 'addEmployee');
  //   // wrapper.vm.onSubmit ( event);
  //   // expect(spy).toHaveBeenCalled();
  //   // expect(spyAddEmployee).toHaveBeenCalled();

  //   wrapper.destroy();
  // }); */
  // #endregion
});
