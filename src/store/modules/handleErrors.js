const handleErrors = (actionType, notification, dispatch) => {
  dispatch(actionType, notification, { root: true });
};

export default handleErrors;
