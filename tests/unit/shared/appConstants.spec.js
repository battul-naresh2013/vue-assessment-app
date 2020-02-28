import { teams, skills } from '../../../src/shared/appConstants';

describe('In appConstants', () => {
  it('it should have teams and skills constants', () => {
    expect(teams).toBeDefined();
    expect(skills).toBeDefined();
  });

  it('it should have 5 items each in teams and skills constants', () => {
    expect(teams).toHaveLength(5);
    expect(skills).toHaveLength(5);
  });
});
