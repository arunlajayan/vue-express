<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title>Messages</v-toolbar-title>
    </v-toolbar>

    <ul v-for="message in messages" v-bind:key="message">
      <!-- li class="list-group-item" v-for="type in types"  v-bind:key="type" -->
      <li>{{ message }}</li>
    </ul>
    <ul>
      2
    </ul>
    <ul>
      3
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      messages: ["null", "hi"],
    };
  },
  async created() {
    // this.$root.$on("newMessage", (message) => {
    //   this.messages.push(message);
    // });
    this.messages = (await axios.get("http://localhost:30000/messages")).data;
  },
};
</script>