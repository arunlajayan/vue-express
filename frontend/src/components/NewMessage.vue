<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <input v-model="messageBody" label="Message" placeholder="edit me" />

      <div class="field has-text-right">
        <button type="submit"><v-btn @click="submit">Submit</v-btn></button>
      </div>
    </v-card>
  </v-flex>
</template> 
<script>
import axios from "axios";
export default {
  data() {
    return {
      messageBody: "",
    };
  },

  methods: {
    submit() {
      axios.post("http://localhost:30000/messages", {
        messages: this.messageBody,
      });
      // this.$root.$emit("newMessage", this.messageBody);
    },
  },
};
</script>