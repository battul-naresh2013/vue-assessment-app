import store from '../../../src/store';

describe('In Store', () => {
  it('it should have all state objects ', () => {
    expect(store.state.employeeModule).toBeTruthy();
    expect(store.state.teams).toBeTruthy();
    expect(store.state.skills).toBeTruthy();
  });
});
