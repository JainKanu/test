<template>
  <div class="formPage">
    <DynamicForm :formsData="formsData" />
  </div>
</template>

<script lang="ts">
import DynamicForm from "../components/dynamicForms.vue";
import Forms from "../assets/sample.json";
import Vue from "vue";

export default Vue.extend({
  name: "FormPageView",
  components: { DynamicForm },
  data() {
    return {
      formsData: Forms.blocks,
    };
  },
});
</script>
