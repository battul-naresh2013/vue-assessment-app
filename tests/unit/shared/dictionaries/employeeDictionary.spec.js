import empolyees from '../../../../src/shared/dictionaries/employeeDictionary';

describe('In empolyees dictionry', () => {
  it("it should have addEmployeeTitle as 'Add Employee'", () => {
    expect(empolyees.addEmployeeTitle).toEqual('Add Employee');
  });

  it("it should have allEmployeeTitle as 'All Employee'", () => {
    expect(empolyees.allEmployeeTitle).toEqual('All Employee');
  });
});
