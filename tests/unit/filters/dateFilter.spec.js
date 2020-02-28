import dateFilter from '../../../src/filters/dateFilter';

describe('In date filter', () => {
  it("returns the date in format 'dd-MM-yyyy'", () => {
    const dd = new Date().getDate();
    expect(dateFilter(new Date())).toContain(`${dd}-`);
  });
});
