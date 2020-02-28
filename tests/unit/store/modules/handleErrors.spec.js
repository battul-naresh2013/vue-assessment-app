import handleErrors from '../../../../src/store/modules/handleErrors';

describe('In handleErrors function', () => {
  let addNotification;
  let notification;
  let dispatch;
  beforeEach(() => {
    addNotification = 'notification/add';
    notification = {
      type: 'error',
      message: 'There was a problem getting all employees',
    };
    dispatch = jest.fn();
    handleErrors(addNotification, notification, dispatch);
  });

  it('it should dispatch an action', () => {
    expect(dispatch).toHaveBeenCalled();
  });

  it('it should call dispatch with passed actionType, addNotification and root as true', () => {
    expect(dispatch).toHaveBeenCalledWith(addNotification, notification, { root: true });
  });
});
