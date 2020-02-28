export const teams = [
  'IB Rebuild',
  'Classic IB',
  'ChatBot',
  'Business Forms',
  'Bench',
];

export const skills = [
  'Frontend',
  'Backend',
  'Fullstack',
  'Mendix',
  'Backbase',
];

export const initialForm = {
  email: '',
  name: '',
  skill: null,
  teams: [],
};

export const fields = [
  {
    key: 'name',
    label: 'Full name',
    sortable: true,
    sortDirection: 'desc',
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'skill',
    label: 'Skill',
    sortable: true,
  },
  { key: 'teams', label: 'Teams', sortable: true },
  { key: 'actions', label: 'Actions' },
];

export const actionTypes = {
  postEmployeeAction: 'employeeModule/postEmployeeAction',
  getEmployeeAction: 'employeeModule/getEmployeeAction',
  getAllEmployeesAction: 'employeeModule/getAllEmployeesAction',
  addNotification: 'notification/add',
  getNotification: 'notification/get',
  clearNotification: 'notification/clear',
};
