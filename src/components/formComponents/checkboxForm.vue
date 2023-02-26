<template>
  <div>
    <b-form-group>
      <b-form-checkbox
        :value="fieldProps?.default || true"
        :unchecked-value="false"
        :checked="fieldValue"
        :state="fieldProps?.required ? state : null"
        >{{ fieldProps.title }}</b-form-checkbox
      >
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
  name: "CheckboxForm",
  data() {
    return {
      fieldValue: false,
    };
  },
  created() {
    EventBus.$on("validateForm", this.validateForm);
  },
  methods: {
    validateForm() {
      EventBus.$emit("submitForm", {
        value: !this.fieldValue ? null : true,
        token: this.token,
      });
    },
  },
  destroyed() {
    EventBus.$off("validateForm", this.validateForm);
  },
});
</script>
