<template>
  <b-tab :title="employeeDictionary.allEmployeeTitle" >
    <b-card class="mt-3" :header="employeeDictionary.listEmployeeHeaderText">
      <!-- User Interface controls -->
      <b-row>
        <b-col cols="6" class="m-2">
          <b-form-group
            label="Filter"
            label-cols-sm="2"
            label-align-sm="left"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to Search"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''"
                  >Clear</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        show-empty
        :hover="true"
        small
        stacked="md"
        :items="employees"
        :fields="fields"
        :filter="filter"
      >
        <template v-slot:cell(actions)="row">
          <b-button
            size="sm"
            @click="edit(row.item, row.index, $event.target)"
            class="mr-1"
            variant="info"
          >
          <b-icon icon="pencil" font-scale="1.5" class="border border-info rounded"
          variant="primary">
          </b-icon>
          </b-button>
          <b-button variant="info"
            size="sm"
            @click="showMsgBoxTwo(row.item, row.index, $event.target)"
            class="mr-1"
          >
          <b-icon icon="trash" font-scale="1.5" class="border border-info rounded" variant="danger">
          </b-icon>
          </b-button>
          <b-button variant="info" size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? "Hide" : "Show" }} Details
          </b-button>
        </template>
        <template v-slot:row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">
                {{ key }}: {{ value }}
              </li>
            </ul>
          </b-card>
        </template>
      </b-table>
      <!-- Info modal -->
      <b-modal
        :id="infoModal.id"
        :title="infoModal.title"
        @hide="resetInfoModal"
      >
        <pre>{{ infoModal.content }}</pre>
      </b-modal>
    </b-card>
  </b-tab>
</template>

<script>
import { fields, actionTypes } from '../../shared/appConstants';
import employeeDictionary from '../../shared/dictionaries/employeeDictionary';

export default {
  name: 'list-employees',
  data() {
    return {
      fields,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: '',
      sortDesc: false,
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      sortDirection: 'asc',
      boxTwo: '',
      employeeDictionary,
    };
  },
  computed: {
    employees() {
      return this.$store.state.employeeModule.allEmployees;
    },
  },
  mounted() {
    this.totalRows = this.employees.length;
    this.getAllEmployee();
  },
  methods: {
    getEmployee(employeeId) {
      this.$store.dispatch(actionTypes.getEmployeeAction, employeeId); // actionType, payLoad
    },
    getAllEmployee() {
      this.$store.dispatch(actionTypes.getAllEmployeesAction);
    },
    edit(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = '';
    },
    showMsgBoxTwo(item) {
    // showMsgBoxTwo(item, index, button) {
      // console.log(item, index, button);

      this.boxTwo = '';
      this.$bvModal
        .msgBoxConfirm(
          `Please confirm that you want to delete ${item.name}'s details`,
          {
            title: 'Please Confirm',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'YES',
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true,
          },
        )
        .then((value) => {
          this.boxTwo = value;
          // console.log(value);
        })
        .catch(() => {
          // console.log(err);
        });
    },
  },
};
</script>
