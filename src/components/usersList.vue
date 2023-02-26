<template>
  <div v-if="usersList.length">
    <div class="m-2">
      <b-form-group label="Filter" class="mb-0">
        <b-input-group size="sm">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
            @input="filteredItems"
          ></b-form-input>

          <b-input-group-append>
            <b-button
              :disabled="!filter"
              @click="(filter = ''), (filterdData = [])"
              >Clear</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <b-table-simple hover responsive>
        <b-thead>
          <b-tr>
            <b-th @click="sortList('name')">Name</b-th>
            <b-th @click="sortList('email')">Email</b-th>
            <b-th @click="sortList('website')">Website</b-th>
            <b-th @click="sortList('phone')">Phone</b-th>
          </b-tr>
        </b-thead>
        <tbody>
          <b-tr
            v-for="user in (filter && filterdData) || usersList"
            :key="user.id"
          >
            <b-td>{{ user.name }}</b-td>
            <b-td>{{ user.email }}</b-td>
            <b-td>{{ user.website }}</b-td>
            <b-td>{{ user.phone }}</b-td>
          </b-tr>
        </tbody>
      </b-table-simple>
      <!-- <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button> -->
    </div>
  </div>
  <div v-else class="text-center p-5">
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Vue from "vue";
import { User, UserListData } from "../types/user";

export default Vue.extend({
  name: "UserList",
  data(): UserListData {
    return {
      filterdData: [],
      sortedbyASC: true,
      pageSize: 5,
      currentPage: 1,
      filter: "",
    };
  },
  computed: {
    ...mapGetters({ usersList: "users" }),
  },
  methods: {
    sortList(sortBy: string) {
      if (this.sortedbyASC) {
        this.usersList.sort(
          (x: { [x: string]: number }, y: { [x: string]: number }) =>
            x[sortBy] > y[sortBy] ? -1 : 1
        );
        this.sortedbyASC = false;
      } else {
        this.usersList.sort(
          (x: { [x: string]: number }, y: { [x: string]: number }) =>
            x[sortBy] < y[sortBy] ? -1 : 1
        );
        this.sortedbyASC = true;
      }
    },
    filteredItems() {
      console.clear();
      console.log("this.filter", this.filter);

      this.filterdData = this.usersList.filter((list: User) => {
        const name = list.name.toString().toLowerCase();
        const email = list.email.toLowerCase();
        const website = list.website.toLowerCase();
        const phone = list.phone.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          name.includes(searchTerm) ||
          email.includes(searchTerm) ||
          website.includes(searchTerm) ||
          phone.includes(searchTerm)
        );
      });
    },
    // nextPage() {
    //   if (this.currentPage * this.pageSize < this.filteredCats.length)
    //     this.currentPage++;
    // },
    // prevPage() {
    //   if (this.currentPage > 1) this.currentPage--;
    // },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
});
</script>
