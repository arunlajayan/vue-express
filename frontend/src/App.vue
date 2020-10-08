<template>
  <NewMessage />
  <Messages />
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",
  components: {
    Messages,
    NewMessage,
  },
};
</script>


