<template>
  <div id="app">
    {{ msg }}
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello vue+webpack",
    };
  },
};
</script>

<style>
#test {
  color: aqua;
}
</style>
