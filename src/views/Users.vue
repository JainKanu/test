<template>
  <div class="home">
    <UsersList />
  </div>
</template>

<script lang="ts">
import UsersList from "../components/usersList.vue";
import Vue from "vue";

export default Vue.extend({
  name: "UsersView",
  components: { UsersList },
});
</script>
