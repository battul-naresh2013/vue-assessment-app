<template>
  <b-container>
    <b-card no-body>
      <b-tabs card>
        <add-employee />
        <list-employee />
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import addEmployee from '../components/employees/addEmployee.vue';
import listEmployee from '../components/employees/listEmployee.vue';

export default {
  name: 'employees',
  components: {
    addEmployee,
    listEmployee,
  },
};
</script>
