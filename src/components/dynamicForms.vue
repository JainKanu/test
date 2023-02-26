<template>
  <b-container class="dynamicForms">
    <b-form v-if="!isLoading">
      <b-row
        class="formRow"
        v-for="fields in formFieldsData"
        :key="fields.token"
      >
        <b-col cols="6" class="formCol">
          <div v-if="fields.type === 'text'">
            <TextForm
              :fieldProps="fields.props"
              :token="fields.token"
              :state="fields.state"
            />
          </div>
          <div v-if="fields.type === 'checkbox'">
            <CheckboxForm
              :fieldProps="fields.props"
              :token="fields.token"
              :state="fields.state"
            />
          </div>
          <div v-if="fields.type === 'date'">
            <DateForm
              :fieldProps="fields.props"
              :token="fields.token"
              :state="fields.state"
            />
          </div>
        </b-col>
      </b-row>
      <b-button variant="outline-success" @click="validateForm()"
        >Submit</b-button
      >
    </b-form>
    <div v-else class="text-center p-5">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
  </b-container>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import TextForm from "./formComponents/textForm.vue";
import DateForm from "./formComponents/dateForm.vue";
import CheckboxForm from "./formComponents/checkboxForm.vue";
import FormsInterface from "../types/forms";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EventBus from "../plugins/eventBus";

export default Vue.extend({
  props: {
    formsData: Array as PropType<FormsInterface[]>,
  },
  name: "DynamicForm",
  components: {
    TextForm,
    DateForm,
    CheckboxForm,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    EventBus.$on("submitForm", this.submitForm);
  },
  destroyed() {
    EventBus.$off("submitForm", this.submitForm);
  },
  computed: {
    formFieldsData(): FormsInterface[] {
      return this.formsData.map((fields: FormsInterface) => {
        return {
          ...fields,
          state: null,
        };
      });
    },
  },
  methods: {
    validateForm() {
      this.isLoading = true;
      EventBus.$emit("validateForm");
    },
    submitForm(data: { value: string | boolean; token: string }) {
      this.formFieldsData.map((fields: FormsInterface) => {
        if (data.token === fields.token && fields.props.required) {
          fields.state = data.value ? true : false;
        }
      });
      this.isLoading = false;
    },
  },
});
</script>
<style scoped>
.dynamicForms {
  display: flex;
  justify-content: center;
}
.formRow {
  width: 40em;
}
.formCol {
  width: 100%;
  margin-bottom: 20px;
}
</style>
