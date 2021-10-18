<template>
  <div v-cloak>
    <div id="nav"></div>
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all.scss";
[v-cloak] {
  display: none;
}
</style>
