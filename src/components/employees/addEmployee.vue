<template>
  <b-tab :title="employeeDictionary.addEmployeeTitle" active>
    <b-card class="mt-3" :header="employeeDictionary.addEmployeeHeaderText">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          :label="`${employeeDictionary.emailText}: `"
          :description="employeeDictionary.emailDescription"
        >
          <b-form-input
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            id="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group :label="`${employeeDictionary.fullNameText}: `">
          <b-form-input
            v-model="form.name"
            required
            placeholder="Enter name"
            id="fullName"
          ></b-form-input>
        </b-form-group>

        <b-form-group :label="`${employeeDictionary.skillText}: `">
          <b-form-select
            v-model="form.skill"
            :options="skills"
            required
            id="skill"
          ></b-form-select>
        </b-form-group>
        <b-form-group :label="`${employeeDictionary.teamsText}: `">
          <b-form-checkbox-group v-model="form.teams">
            <b-form-checkbox
              v-for="(team, index) in this.teams"
              :value="team"
              :key="index"
              >{{ team }}</b-form-checkbox
            >
          </b-form-checkbox-group>
        </b-form-group>
        <div>
          <b-button class="mr-2" type="submit" variant="primary" id="submit"
            >{{employeeDictionary.submitText}}</b-button
          >
          <b-button class="ml-2" type="reset" variant="danger"
          >{{employeeDictionary.resetText}}</b-button>
        </div>
      </b-form>
    </b-card>
  </b-tab>
</template>

<script>
import { initialForm, actionTypes } from '../../shared/appConstants';
import employeeDictionary from '../../shared/dictionaries/employeeDictionary';

export default {
  name: 'add-employee',
  data() {
    return {
      form: { ...initialForm },
      skills: this.$store.state.skills,
      teams: this.$store.state.teams,
      show: true,
      employeeDictionary,
    };
  },

  methods: {
    onSubmit(evt) {
      const payLoad = { ...this.form };
      evt.preventDefault();
      this.addEmployee(payLoad);
    },
    onReset(evt) {
      evt.preventDefault();
      this.resetFrom();
    },
    addEmployee(payLoad) {
      this.$store
        .dispatch(actionTypes.postEmployeeAction, payLoad)
        .then(() => {
          this.resetFrom();
          // eslint-disable-next-line no-alert
          alert('Successfully Added');
        });
    },
    resetFrom() {
      this.form = initialForm;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
