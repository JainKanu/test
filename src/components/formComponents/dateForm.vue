<template>
  <div>
    <b-form-group :label="fieldProps.title">
      <b-form-input
        v-model="fieldValue"
        :state="fieldProps?.required ? state : null"
        type="date"
        :placeholder="fieldProps?.placeholder"
      ></b-form-input>
    </b-form-group>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EventBus from "../../plugins/eventBus.js";
import Vue from "vue";

export default Vue.extend({
  props: {
    fieldProps: Object,
    token: String,
    state: Boolean,
  },
  name: "DateForm",
  data() {
    return {
      fieldValue: null,
    };
  },
  created() {
    EventBus.$on("validateForm", this.validateForm);
  },
  methods: {
    validateForm() {
      EventBus.$emit("submitForm", {
        value: this.fieldValue,
        token: this.token,
      });
    },
  },
  destroyed() {
    EventBus.$off("validateForm", this.validateForm);
  },
});
</script>
